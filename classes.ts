class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get Name() {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  print() {
    console.log(this._name, this._age);
  }
}

class Student extends Person {
  constructor(name: string, age: number, grade: string) {
    super(name, age);
  }
}

let jane = new Person("jane", 34);
console.log(jane.print());
