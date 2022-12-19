import { PetsModule } from './../pets/pets.module';
import { Module, forwardRef } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), forwardRef(() => PetsModule)],
  providers: [OwnersResolver, OwnersService],
  exports: [OwnersService],
})
export class OwnersModule { }
