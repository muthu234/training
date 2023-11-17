import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({name:'user'})
export class User {
@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;

@Column({nullable:true})
age:number;

@Column({default:true})
is_Active:boolean;

@CreateDateColumn()
createAt:Date;

@Column({nullable:true})
createBy:number;

@UpdateDateColumn()
updateAt:Date;

@Column({nullable:true})
updateBy:number;

@DeleteDateColumn()
deletedAt:Date;

@Column({nullable:true})
deletedBy:number;

}
