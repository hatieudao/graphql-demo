import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreatePetInput {
  @Field()
  @IsString()
  name: string;

  @Field((type) => Int, { nullable: true })
  typeId?: number;

  @Field((type) => Int, { nullable: true })
  ownerId?: number;
}
