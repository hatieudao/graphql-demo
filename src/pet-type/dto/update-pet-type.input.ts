import { CreatePetTypeInput } from './create-pet-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdatePetTypeInput extends PartialType(CreatePetTypeInput) {
  @Field((type) => Int)
  id: number;

  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  detail?: string;
}
