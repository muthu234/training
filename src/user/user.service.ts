import { Injectable, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
 updateUser(id: number, data: UpdateUserDto) {
   throw new Error('Method not implemented.');
 }
 updateuser() {
   throw new Error('Method not implemented.');
 }
 constructor(@InjectRepository(User)private userRepository:Repository<User>){}
 async createuser(CreateUserDto:any)
 {
  return await this.userRepository.save(CreateUserDto);
 }
 async getAlluser()
 {
  return await this.userRepository.find({
    select:['id','name','age']
  })
 }
 async UpdateUser(id:number,UpdateUserDto:any)
 {
  return await this.userRepository.update(id,UpdateUserDto)
 }
 async deleteuser(id,userid)
 {
    await this.userRepository.softDelete(id);
    return this.userRepository.update(id,{deletedBy:userid})
 }
}
