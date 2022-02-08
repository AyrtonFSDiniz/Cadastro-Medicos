import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medicos } from './model/medico.model';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(Medicos)
    private medicosModel: typeof Medicos
    ) {}

  create(createMedicoDto: CreateMedicoDto) {
    return 'This action adds a new medico';
  }

  findAll() {
    return `This action returns all medicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
