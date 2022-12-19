import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetTypeService } from './pet-type.service';
import { PetType } from './entities/pet-type.entity';
import { CreatePetTypeInput } from './dto/create-pet-type.input';
import { UpdatePetTypeInput } from './dto/update-pet-type.input';

@Resolver(() => PetType)
export class PetTypeResolver {
  constructor(private readonly petTypeService: PetTypeService) { }

  @Mutation(() => PetType)
  createPetType(
    @Args('createPetTypeInput') createPetTypeInput: CreatePetTypeInput,
  ) {
    return this.petTypeService.create(createPetTypeInput);
  }

  @Query(() => [PetType], { name: 'petType' })
  findAll() {
    return this.petTypeService.findAll();
  }

  @Query(() => PetType, { name: 'petType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petTypeService.findOne(id);
  }

  @Mutation(() => PetType)
  updatePetType(
    @Args('updatePetTypeInput') updatePetTypeInput: UpdatePetTypeInput,
  ) {
    return this.petTypeService.update(
      updatePetTypeInput.id,
      updatePetTypeInput,
    );
  }

  @Mutation(() => PetType)
  removePetType(@Args('id', { type: () => Int }) id: number) {
    return this.petTypeService.remove(id);
  }
}
