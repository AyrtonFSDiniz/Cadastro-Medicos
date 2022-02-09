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

  /*async create(createMedicoDto: CreateMedicoDto): Promise<Medicos> {
    return await this.medicosModel.create(createMedicoDto);
  }*/

  async create(salvarMedico: Medicos): Promise<Medicos> {
    return await this.medicosModel.create(salvarMedico);
}

  async findAll(): Promise<Medicos[]> {
    return await this.medicosModel.findAll();
  }

  async findOne(id: number): Promise<Medicos> {
    return await this.medicosModel.findOne({
      where: { id },
    });
  }

  async update(alterarMedico: Medicos): Promise<[number, Medicos[]]> {
    return await this.medicosModel.update(alterarMedico, {
      where: {
        id: alterarMedico.id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
