import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Medicos extends Model<Medicos> {
  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
    validate: {
      len: [1, 120],
    },
  })
  nome: string;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    validate: {
      len: [0, 7],
    },
  })
  CRM: number;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  telefone_fixo: number;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  telefone_celular: number;

  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
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
