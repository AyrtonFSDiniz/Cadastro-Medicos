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
import { Medicos } from './model/medico.model';

@Controller('cadastro')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto): Promise<Medicos> {
    return this.medicosService.create(createMedicoDto);
  }

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
    @Body() updateMedicoDto: UpdateMedicoDto,
  ): Promise<Medicos> {
    return this.medicosService.update(+id, updateMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.medicosService.remove(+id);
  }
}
