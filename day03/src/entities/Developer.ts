import {Entity,PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity('Developer')
export class Developer extends BaseEntity{
  constructor(id:string, name:string, age:number, school:string, experience:number) {
    super();
    this.id = id;
    this.name = name;
    this.age = age;
    this.school = school;
    this.experience = experience;
    };
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  school: string;
  @Column()
  experience: number;
};
