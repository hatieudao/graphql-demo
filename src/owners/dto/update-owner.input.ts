import { IsNumber, IsString } from 'class-validator';
import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  gender: string;

  @Field((type) => Int)
  @IsNumber()
  age: number;

}
