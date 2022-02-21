import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMedicoDto {
  @MaxLength(120)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Insira o nome do médico',
    example: 'Marcos Teixeira',
  })
  nome: string;

  @MaxLength(7)
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Insira o CRM do médico',
    example: '35485',
  })
  CRM: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Insira o telefone fixo do médico',
    example: '1334999999',
  })
  telefone_fixo: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Insira o telefone celular do médico',
    example: '13991111111',
  })
  telefone_celular: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Insira o cep do médico para também salvar o endereço',
    example: '11711550',
  })
  cep: number;

  @ApiProperty()
  nome_especialidades: string[];
}
