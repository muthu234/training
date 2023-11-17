import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request ,Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
@Post('createuser')
async createuser(@Req() req:Request,@Res() res:Response,@Body() data:CreateUserDto){
  try {
    data['createdBy']=1 
    const user = await this.userService.createuser(data);
    res.status(HttpStatus.OK).json({
      message:"User Created Successfully",
      data:user
    });
  }
    catch(error)
    {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:"Some thing Went Wrong",
      })
    }
    
  }

@Get('getAlluser')
async getAlluser(@Req() req:Request,@Res() res:Response){
  try {
    const user = await this.userService.getAlluser();
    res.status(HttpStatus.OK).json({
      message:"User Created Successfully",
      data:user
    });
  }
    catch(error)
    {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:"Some thing Went Wrong",
      })
    }
    
  }
  @Put('updateuser/:id')
async updateuser(@Req() req:Request,@Res() res:Response,@Param('id')id:number,@Body() data:UpdateUserDto){
  try {
    const user =  await this.userService.UpdateUser(id,data);
    res.status(HttpStatus.OK).json({
      message:"User Updated Successfully",
      data:user
    });
  }
    catch(error)
    {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:"Some thing Went Wrong",
      })
    }
    
  }
  @Get('deleteuser/:id')
async deleteuser(@Req() req:Request,@Res() res:Response,@Param('id')id:number){
  try {
    const userid=1
    const user =  await this.userService.deleteuser(id,userid);
    res.status(HttpStatus.OK).json({
      message:"User Deleted Successfully",
      data:user
    });
  }
    catch(error)
    {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:"Some thing Went Wrong",
      })
    }
    
  }


}

