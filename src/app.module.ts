import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicosModule } from './medicos/medicos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicos } from './model/medico.model';

@Module({
  imports: [
    MedicosModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'database_development',
      models: [Medicos],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [SequelizeModule],
})
export class AppModule {}
