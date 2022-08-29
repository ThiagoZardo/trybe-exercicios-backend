import Enrollable from "../interfaces/IEnrollable";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this._worksGrades]
      .reduce((acc, curr) => acc + curr, 0);
  }

  sumAverageGrade(): number {
    const sum = this.sumGrades();
    const lengthTotal = this._examsGrades.length + this._worksGrades.length;
    const average = sum / lengthTotal;
    return Math.round(average);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}