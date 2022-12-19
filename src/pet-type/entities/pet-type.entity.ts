import { Pet } from './../../pets/entities/pet.entity';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class PetType {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  detail: string;

  @OneToMany((type) => Pet, (pet) => pet.petType)
  @Field((type) => [Pet])
  pets: Pet[];
}
