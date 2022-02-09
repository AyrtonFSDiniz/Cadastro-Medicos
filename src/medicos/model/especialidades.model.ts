import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import {
  IsInt,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Medicos } from './medico.model';

@Table
class Especialidades extends Model {
  @Column
  @IsNumber()
  id: number;

  @Column
  nome_especialidade: string;

  @HasMany(() => Medicos) medico: Medicos[];
}
