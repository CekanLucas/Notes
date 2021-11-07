export interface IAnimal {
  name: string;
  age: number;

  feed(food: string, amount: number): void
}

class Cat implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
