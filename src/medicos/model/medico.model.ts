import {
  AutoIncrement,
  Column,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import {
  IsInt,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
@Table
export class Medicos extends Model {
  @Column
  @AutoIncrement
  @Unique
  @IsNumber()
  id: number;

  @Column
  @MaxLength(120)
  nome: string;

  @Column
  @Unique
  @Min(1)
  @Max(9999999)
  CRM: number;

  @Column
  @IsInt()
  telefone_fixo: number;

  @Column
  @IsInt()
  telefone_celular: number;

  @Column
  @IsInt()
  cep: number;

  @Column
  @MinLength(2)
  nome_especialidades: string[];
}
