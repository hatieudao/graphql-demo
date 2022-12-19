import { Injectable } from '@nestjs/common';
import { CreatePetTypeInput } from './dto/create-pet-type.input';
import { UpdatePetTypeInput } from './dto/update-pet-type.input';
import { PetType } from './entities/pet-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetTypeService {
  constructor(
    @InjectRepository(PetType)
    private readonly pettypeRepository: Repository<PetType>,
  ) { }
  create(createPetTypeInput: CreatePetTypeInput) {
    return this.pettypeRepository.save(
      this.pettypeRepository.create(createPetTypeInput),
    );
  }

  findAll() {
    return this.pettypeRepository.find();
  }

  findOne(id: number) {
    return this.pettypeRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePetTypeInput: UpdatePetTypeInput) {
    return this.pettypeRepository.update(id, updatePetTypeInput);
  }

  remove(id: number) {
    return this.pettypeRepository.delete(id);
  }
}
