import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { map, Observable } from 'rxjs';
import { Medicos } from '../model/medico.model';

@Injectable()
export class MedicosService {
  constructor(
    @InjectModel(Medicos)
    private medicosModel: typeof Medicos,
    private httpService: HttpService,
  ) {}

  async create(salvarMedico: Medicos): Promise<Medicos> {
     
    findAll(): Observable<AxiosResponse<Medicos[]>> {
      return this.httpService.get(`https://viacep.com.br/ws/${{salvarMedico.cep}}/json`)
  }

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

/* getQuery(query: string) {
    this.httpService
      .get('http://localhost:3001/get-query', {
        params: {
          key: query,
        },
      })
      .subscribe(this.observer);
  } */

  /*import { Injectable, Inject } from '@nestjs/common'

import githubAPI from '../../../config/githubAPI'
import viacepAPI from '../../../config/viacepAPI'
import IGithubData from '../dtos/IGithubData'
import IAddress from '../dtos/IAddress'
import { User } from '../models/User'
import IUsersRepository from '../repositories/IUsersRepository'

interface IGithubResponse {
    total_count: number
    incomplete_results: boolean
    items: IGithubData[]
}

interface IRequest {
    name: string
    age: number
    github_user: string
    cep: string
}

@Injectable()
class CreateUserService {

    constructor(
        @Inject('UsersRepository')
        private repository: IUsersRepository
    ) { }

    public async execute({ name, age, github_user, cep }: IRequest): Promise<User> {
        let responseGithub
        try {
            responseGithub = await githubAPI.get<IGithubResponse>(`search/users?q=${github_user}`)
        } catch (err) {
            throw Error('Unexpected error from GitHub!')
        }

        if (responseGithub.data.total_count === 0) {
            throw Error('Github username does not exists!')
        }

        const {
            login,
            avatar_url,
            repos_url
        }: IGithubData = responseGithub.data.items[0]

        if (cep.length !== 8) {
            throw Error('CEP must have 8 digits!')
        }

        if (!RegExp('^[0-9]*$').test(cep)) {
            throw Error('CEP has a non-numeric character!')
        }

        let responseViacep
        try {
            responseViacep = await viacepAPI.get<IAddress>(`${cep}/json/`)
        } catch (err) {
            throw Error('Unexpected error from ViaCEP!')
        }

        if (responseViacep.data.erro === true) {
            throw Error('CEP does not exists!')
        }

        const user = await this.repository.create({
            name,
            age,
            github_data: {
                login,
                avatar_url,
                repos_url
            },
            address: responseViacep.data
        })

        return user
    }

}

export default CreateUserService */

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
