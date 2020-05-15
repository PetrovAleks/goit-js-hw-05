class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  get info() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

const mango = new User('Mango', 2, 20);
console.log(mango.info);

const poly = new User('Poly', 3, 17);
console.log(poly.info);
