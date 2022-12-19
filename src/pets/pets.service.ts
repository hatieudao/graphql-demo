import { Owner } from './../owners/entities/owner.entity';
import { OwnersService } from './../owners/owners.service';
import { CreatePetInput } from './dto/create-pet.input';
import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePetInput } from './dto/update-pet.input';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,
  ) { }

  createPet(createInput: CreatePetInput): Promise<Pet> {
    const pet = this.petRepository.create(createInput);
    return this.petRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updatePet(id: number, updateInput: UpdatePetInput): Promise<Pet> {
    await this.petRepository.update(id, {
      id,
      ...updateInput,
    });
    return this.findOne(id);
  }

  async removePet(id: number): Promise<boolean> {
    try {
      await this.petRepository.delete(id);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getPets(ownerId: number): Promise<Pet[]> {
    return this.petRepository.find({
      where: {
        ownerId,
      },
    });
  }
}
