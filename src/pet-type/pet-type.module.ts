import { Module, forwardRef } from '@nestjs/common';
import { PetTypeService } from './pet-type.service';
import { PetTypeResolver } from './pet-type.resolver';
import { PetType } from './entities/pet-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PetType]),
    forwardRef(() => PetTypeModule),
  ],
  providers: [PetTypeResolver, PetTypeService],
  exports: [PetTypeService],
})
export class PetTypeModule { }
