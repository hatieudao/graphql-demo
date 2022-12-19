import { Owner } from './../owners/entities/owner.entity';
import { Int, Parent, ResolveField } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.dto';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petService: PetsService) { }

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
    return this.petService.getOwner(pet.ownerId);
  }
}

