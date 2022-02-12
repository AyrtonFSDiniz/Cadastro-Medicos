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
    /*const dado = this.httpService
      .get(`https://viacep.com.br/ws/${{ cep }}/json`)
      .toPromise();
    const dados = dado && cep;*/

    const dado = await lastValueFrom(
      this.httpService
        .post(`https://viacep.com.br/ws/${{ cep }}/json`)
        .pipe(map((resp) => resp.data)),
    );
    const dados = dado && cep;
    // const list = [];
    // const dados = list.push(dado, cep);
    return await this.medicosModel.create(dados);
  }


  /*import axios from 'axios';

class Api {

    static async  getAddress (cep){
        const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
        return response;
    }
}

class Address{
    constructor({logradouro, bairro, localidade}){
        //Para ver todos os campos possíveis, consultar https://viacep.com.br/ws/XXXXXXX/json/
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}

//Digite o cep no campo numérico
Api.getAddress('96030080').then(v => {console.log(v)});*/

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
