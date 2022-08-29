export default class Student {
  private nome: string;
  private matricula: number;
  private notasProvas: number[];
  private notasTrabalhos: number[];

  constructor(nome: string, matricula: number, notasProvas: number[], notasTrabalhos: number[]) {
    this.nome = nome;
    this.matricula = matricula;
    this.notasProvas = notasProvas;
    this.notasTrabalhos = notasTrabalhos;
  }

  get GetNome(): string {
    return this.nome;
  }

  set SetNome(nomeParam: string) {
    this.nome = nomeParam;
  }

  get GetMatricula(): number {
    return this.matricula;
  }

  set SetMatricula(matriculaParam: number) {
    this.matricula = matriculaParam;
  }

  get GetNotasProvas(): number[] {
    return this.notasProvas;
  }

  set SetNotasProvas(notaProvaParam: number[]) {
    this.notasProvas = notaProvaParam;
  }

  get GetNotasTrabalhos(): number[] {
    return this.notasTrabalhos;
  }

  set SetNotasTrabalhos(notaTrabalhoParam: number[]) {
    this.notasTrabalhos = notaTrabalhoParam;
  }

  somaNotas(): number {
    const totalNotasProvas = this.notasProvas.reduce((acc, cur) => acc + cur);
    const totalNotasTrabalhos = this.notasTrabalhos.reduce((acc, cur) => acc + cur);
    const total = totalNotasProvas + totalNotasTrabalhos;
    return total;
  }

  calcMedia(): number {
    const soma = this.somaNotas();
    const tamanho = this.notasProvas.length + this.notasTrabalhos.length;
    const media = Math.round(soma / tamanho);
    return media;
  }
}

const student1 = new Student('Thiago', 521, [10, 9, 10], [9.5, 8.9, 10]);
console.log(student1);
const minhaMedia = student1.calcMedia();
const somaMinhasNotas = student1.somaNotas();

console.log(somaMinhasNotas);
console.log(minhaMedia);
