import { Owner } from './../owners/entities/owner.entity';
import { OwnersService } from './../owners/owners.service';
import { CreatePetInput } from './dto/create-pet.dto';
import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly repository: Repository<Pet>,
    private readonly ownersService: OwnersService,
  ) { }

  createPet(createInput: CreatePetInput): Promise<Pet> {
    const pet = this.repository.create(createInput);
    return this.repository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(+ownerId);
  }
}
