import { runInThisContext } from "vm";

export default class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(d: number, m: number, a: number) {
    this.dia = d;
    this.mes = m;
    this.ano = a;
  }

  get GetDia(): number {
    return this.dia;
  }

  set SetDia(dParam: number) {
    this.dia = dParam;
  }

  get GetMes(): number {
    return this.mes;
  }

  set SetMes(mParam: number) {
    this.mes = mParam;
  }

  get GetAno(): number {
    return this.ano;
  }

  set SetAno(aParam: number) {
    this.ano = aParam;
  }
}