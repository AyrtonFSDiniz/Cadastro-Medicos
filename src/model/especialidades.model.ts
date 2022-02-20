import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Medicos } from './medico.model';

@Table
export class Especialidades extends Model {
  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    primaryKey: true,
    validate: {
      isNumeric: true,
    },
  })
  id: number;

  @Column({
    type: DataType.CHAR,
    allowNull: false,
  })
  nome_especialidade: string;

  @ForeignKey(() => Medicos)
  @Column
  medicosId: number;

  @BelongsTo(() => Medicos)
  medicos: Medicos[];
}
