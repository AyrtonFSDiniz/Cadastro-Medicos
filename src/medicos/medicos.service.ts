import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medicos } from './model/medico.model';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(Medicos)
    private medicosModel: typeof Medicos,
  ) {}

  async create(createMedicoDto: CreateMedicoDto): Promise<Medicos> {
    return await this.medicosModel.create(createMedicoDto);
  }

  async findAll(): Promise<Medicos[]> {
    return await this.medicosModel.findAll();
  }

  async findOne(id: number): Promise<Medicos> {
    return await this.medicosModel.findOne({
      where: { id },
    });
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto): Promise<Medicos> {
    const med = {
      nome: updateMedicoDto.nome,
      crm: updateMedicoDto.CRM,
      telefone_fixo: updateMedicoDto.telefone_fixo,
      telefone_celular: updateMedicoDto.telefone_celular,
    };
    return await this.medicosModel.update(+id, updateMedicoDto);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
