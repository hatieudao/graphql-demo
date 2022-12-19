import { InjectRepository } from '@nestjs/typeorm/dist';
import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private readonly ownersRepository: Repository<Owner>,
  ) { }

  create(createOwnerInput: CreateOwnerInput) {
    return this.ownersRepository.save(
      this.ownersRepository.create(createOwnerInput),
    );
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOne({
      where: {
        id,
      }
    })
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
