import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Jorge Bustos';
  }

  getNumber(num: any): number | string {
    const intNumber = Number(num);
    if (isNaN(intNumber)) {
      return 'No se ha ingresado un número válido';
    }
    return (intNumber + 5) * 2;
  }

  getUserData(data: any): any {
    const { name, age, n } = data;

    const ageIsString = typeof age === 'string';
    const nIsString = typeof n === 'string';
    const nIsZero = n === 0 || n === '0';

    if (ageIsString && nIsString) {
      return { error: 'edad y número n deben ser números' };
    } else if (ageIsString) {
      return { error: 'edad debe ser un número' };
    } else if (nIsString) {
      return { error: 'número n debe ser un número' };
    } else if (nIsZero) {
      return { error: 'el número n no puede ser 0' };
    }

    const result = age / n;
    return {
      frase: `Bienvenido ${name}`,
      calculo: `Tu edad dividida por ${n} es ${result}.`
    };
  }
}
