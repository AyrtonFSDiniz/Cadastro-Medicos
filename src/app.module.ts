import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicosModule } from './medicos/medicos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicos } from './model/medico.model';
import { Especialidades } from './model/especialidades.model';

@Module({
  imports: [
    MedicosModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307, //3307 para local,
      username: 'root',
      password: 'root',
      database: 'database_development',
      models: [Medicos, Especialidades],
      autoLoadModels: true, //comentar essa linha para rodar com o docker
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [SequelizeModule],
})
export class AppModule {}
