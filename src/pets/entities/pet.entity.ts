import { PetType } from './../../pet-type/entities/pet-type.entity';
import { Owner } from '../../owners/entities/owner.entity';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  typeId: number;

  @ManyToOne((type) => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;

  @Column()
  @Field((type) => Int)
  ownerId: number;

  @OneToOne((type) => PetType, (petType) => petType)
  @Field((type) => PetType)
  petType: PetType;
}
