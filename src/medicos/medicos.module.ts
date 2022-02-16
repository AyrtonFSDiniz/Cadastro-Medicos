import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { Medicos } from '../model/medico.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    SequelizeModule.forFeature([Medicos]),
  ],
  controllers: [MedicosController],
  providers: [MedicosService],
  exports: [SequelizeModule.forFeature([Medicos])],
})
export class MedicosModule {}
