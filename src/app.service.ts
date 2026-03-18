import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Jorge Bustos';
  }
  
  getNumber(num: number): number {
    const intNumber = Number(num);
    return (intNumber + 5) * 2;
  }

  getUserData(data: any): string {
    const { name, age, n } = data;
    const result = age / n;
    return JSON.parse(`{"frase": "Bienvenido ${name}", "calculo": "Tu edad dividida por ${n} es ${result}."}`);
  }

}
