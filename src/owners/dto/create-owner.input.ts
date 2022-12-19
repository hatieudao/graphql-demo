import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateOwnerInput {
  @Field()
  @IsString()
  name: string;
}
