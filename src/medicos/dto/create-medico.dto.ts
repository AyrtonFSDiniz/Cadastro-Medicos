import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicoDto {
  @ApiProperty({
    description: 'Insira o nome do médico',
    example: 'Marcos Teixeira',
  })
  nome: string;

  @ApiProperty({
    description: 'Insira o CRM do médico',
    example: '35485',
  })
  CRM: number;

  @ApiProperty({
    description: 'Insira o telefone fixo do médico',
    example: '1334999999',
  })
  telefone_fixo: number;

  @ApiProperty({
    description: 'Insira o telefone celular do médico',
    example: '13991111111',
  })
  telefone_celular: number;

  @ApiProperty({
    description: 'Insira o cep do médico para também salvar o endereço',
    example: '11711550',
  })
  cep: number;

  //dados: string[];

  //nome_especialidades: string[];
}
