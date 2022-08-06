class SuperClass {
  public isSuper: boolean = true;
  
  sayHello() {
    console.log(`Olá Mundo`);
  }

}

class Subclass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }

}

const myFunc = (obj: SuperClass) => {
  obj.sayHello()
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const objSuperClass = new SuperClass();
const objSubClass = new Subclass();

myFunc(objSubClass);
// myFunc(objSuperClass);