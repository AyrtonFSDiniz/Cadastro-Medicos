import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicosModule } from './medicos/medicos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicos } from '../src/medicos/model/medico.model';

@Module({
  imports: [
    MedicosModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      models: [Medicos],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [SequelizeModule],
})
export class AppModule {}
