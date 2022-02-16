import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Medicos extends Model<Medicos> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
    type: DataType.BIGINT(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  telefone_fixo: number;

  @Column({
    type: DataType.BIGINT(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  telefone_celular: number;

  @Column({
    type: DataType.BIGINT(),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  cep: number[];
}
