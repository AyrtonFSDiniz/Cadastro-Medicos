import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { Medicos } from '../model/medico.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Medicos])],
  controllers: [MedicosController],
  providers: [MedicosService],
})
export class MedicosModule {}
