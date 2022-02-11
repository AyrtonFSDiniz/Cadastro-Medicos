import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs';
import { Medicos } from '../model/medico.model';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(Medicos)
    private medicosModel: typeof Medicos,
    private httpService: HttpService,
  ) {}

  async create(salvarMedico: Medicos): Promise<Medicos> {
     
    /*findAll(): Observable<AxiosResponse<Medicos[]>> {
      return this.httpService.get(`https://viacep.com.br/ws/${{medicosModel.cep}}/json`)
  }*/

    /*const axios = require('axios');
  const medicosModel = require('../model/medico.model')
axios
.get(`https://viacep.com.br/ws/${{medicosModel.cep}}/json`)
  .then(function (response) {
    console.log(response);
  })*/
    

  /* getUsers(): Observable<AxiosResponse<User[]>> {
    console.log('getUsers');
    return this.httpService.get('http://localhost:3000/usersstatic').pipe(
      map((response) => {
        console.log(response.data);
        return response.data;
      }),
    );
  }

  async getUsersPromise(): Promise<any> {
    console.log('getUsersPromise');
    const response = await this.httpService
      .get('http://localhost:3000/usersstatic')
      .toPromise();
    return response.data;
  }
} */

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
