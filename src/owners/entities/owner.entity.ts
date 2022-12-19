import { Pet } from '../../pets/entities/pet.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  gender: string;

  @Column()
  @Field((type) => Int)
  age: number;

  @OneToMany((type) => Pet, (pet) => pet.owner)
  @Field((type) => [Pet], { nullable: true })
  pets: Pet[];
}
