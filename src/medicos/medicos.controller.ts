import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { Medicos } from '../model/medico.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cadastro')
@Controller('cadastro')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  async create(@Body() criarMedico: Medicos): Promise<Medicos> {
    return await this.medicosService.create(criarMedico);
  }

  @Get()
  findAll(): Promise<Medicos[]> {
    return this.medicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Medicos> {
    return this.medicosService.findOne(+id);
  }

  @Get(':nome')
  findOneNome(@Param('nome') nome: string): Promise<Medicos> {
    return this.medicosService.findOneNome(nome);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() atualizarMedico: Medicos,
  ): Promise<[number, Medicos[]]> {
    return this.medicosService.update(atualizarMedico);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.medicosService.remove(+id);
  }
}
