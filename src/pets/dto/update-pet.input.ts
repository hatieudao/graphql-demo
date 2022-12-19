import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class UpdatePetInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId?: number;
}
