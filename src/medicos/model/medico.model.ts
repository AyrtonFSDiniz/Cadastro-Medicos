import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Medicos extends Model {
    
@Column
nome: string;

@Column
crm: number;

@Column
telefone_fixo: number;

@Column
telefone_celular: number;

@Column
cep: number;
}