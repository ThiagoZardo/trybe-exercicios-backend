export default class Cliente {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  get GetNome(): string {
    return this.nome;
  }

  set SetNome(nomeParam: string) {
    this.nome = nomeParam;
  }
}