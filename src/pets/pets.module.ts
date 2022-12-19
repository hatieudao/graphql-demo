import { OwnersModule } from './../owners/owners.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), forwardRef(() => OwnersModule)],
  providers: [PetsService, PetsResolver],
  exports: [PetsService],
})
export class PetsModule { }
