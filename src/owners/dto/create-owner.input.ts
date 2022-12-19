import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
@InputType()
export class CreateOwnerInput {
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
