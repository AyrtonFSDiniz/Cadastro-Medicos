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
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medicos } from '../model/medico.model';

@Controller('cadastro')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
 async create(@Body() criarMedico: Medicos): Promise<Medicos> {
    return await this.medicosService.create(criarMedico);
  }

  /*@Post()
    async criar(@Body() livro: Livro) {
        this.livrosService.criar(livro)
    }*/

  @Get()
  findAll(): Promise<Medicos[]> {
    return this.medicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Medicos> {
    return this.medicosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() atualizarMedico: Medicos,
  ): Promise<[number, Medicos[]]> {
    return this.medicosService.update(atualizarMedico);
  }

  /*@Put()
    async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(livro)
    }*/

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.medicosService.remove(+id);
  }
}
