import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Especialidades } from '../../model/especialidades.model';
import { Medicos } from '../../model/medico.model';

@Table
export class especialidadesMedicas extends Model<Especialidades> {
  @Column
  id: number;

  @Column
  nome_especialidade: string;

  @HasMany(() => Medicos) medico: Medicos[];
}
