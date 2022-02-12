import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Medicos } from '../model/medico.model';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(Medicos)
    private medicosModel: typeof Medicos,
    private readonly httpService: HttpService,
  ) {}

  async create(salvarMedico: Medicos): Promise<Medicos> {
    const cep = salvarMedico.cep;
    const dado = await lastValueFrom(
      this.httpService
        .post(`https://viacep.com.br/ws/${{ cep }}/json`)
        .pipe(map((resp) => resp.data)),
    );
    const list = [];
    const dados = list.push(dado, cep);
    console.log(dados);
    return await this.medicosModel.create(dados);
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
