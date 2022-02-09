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
export class Medicos extends Model<Medicos> {
  @Column
  @AutoIncrement
  @Unique
  //@IsNumber()
  id: number;

  @Column
  //@MaxLength(120)
  nome: string;

  @Column
  @Unique
  //@Min(1)
  //@Max(9999999)
  CRM: number;

  @Column
  //@IsInt()
  telefone_fixo: number;

  @Column
  //@IsInt()
  telefone_celular: number;

  @Column
  //@IsInt()
  cep: number;

  //@Column
  //@MinLength(2)
  //nome_especialidades: string[];
}



/*import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Book extends Model<Book>{

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price: number;*/