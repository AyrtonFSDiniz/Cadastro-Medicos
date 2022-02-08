import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '### Sistema de gestão de cadastro de médicos - SisMed ###';
  }
}
