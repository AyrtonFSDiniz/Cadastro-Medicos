import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Medicos } from './medico.model';

@Table
class Especialidades extends Model {
  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
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

  @HasMany(() => Medicos) medico: Medicos[];
}