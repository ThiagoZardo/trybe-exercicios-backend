class Animal {
  public _name: string;
  protected _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get age() {
    const timeDiff = Math.abs(
      Date.now() - new Date(this._birthDate).getTime()
    );
    return Math.floor(timeDiff / (1000 * 3600 *24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this._name} esta andando`);    
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (a: Animal) => {
  console.log(a.age);
}

class Bird extends Animal {
  fly() {
    console.log(`${this._name} esta voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
)

console.log(parrot.age);
parrot.fly();

// main(tiger);
// tiger.walk();