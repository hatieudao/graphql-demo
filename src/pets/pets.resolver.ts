import { PetType } from './../pet-type/entities/pet-type.entity';
import { OwnersService } from './../owners/owners.service';
import { Owner } from './../owners/entities/owner.entity';
import { Int, Parent, ResolveField } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PetTypeService } from 'src/pet-type/pet-type.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(
    private readonly petService: PetsService,
    private readonly ownersService: OwnersService,
    private readonly petTypeService: PetTypeService,
  ) { }

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Mutation((returns) => Pet)
  createPet(@Args('createInput') createInput: CreatePetInput): Promise<Pet> {
    return this.petService.createPet(createInput);
  }

  @Query((returns) => Pet)
  getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petService.findOne(id);
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.ownersService.findOne(pet.ownerId);
  }

  @Mutation((returns) => Pet)
  updatePet(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateInput') updateInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petService.updatePet(id, updateInput);
  }

  @Mutation((returns) => Boolean)
  removePet(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.petService.removePet(id);
  }

  @ResolveField((returns) => PetType)
  petType(@Parent() pet: Pet): Promise<PetType> {
    return this.petTypeService.findOne(pet.typeId);
  }
}
