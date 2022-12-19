import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePetTypeInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  detail?: string;
}
