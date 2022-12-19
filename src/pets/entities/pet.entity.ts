import { Owner } from '../../owners/entities/owner.entity';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
  @Field({ nullable: true })
  type: string;

  @ManyToOne((type) => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;

  @Column()
  @Field((type) => Int)
  ownerId: number;
}
