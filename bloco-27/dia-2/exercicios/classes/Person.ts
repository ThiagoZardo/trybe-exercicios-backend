class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate:Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get getName():string {
    return this._name;
  }

  set setName(value: string) {
    if (value.length > 2) this._name = value;
  }

  get getBirthDate(): Date {
    return this._birthDate;
  }

  set setBirthDate(value: Date) {
    this._birthDate = value;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }
}
export default Person;