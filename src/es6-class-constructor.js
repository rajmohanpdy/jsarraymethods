class classA {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sayHello() {
    console.log(`this is ${this.x} and ${this.y}`);
  }
}
class classB extends classA {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  sayYes() {
    console.log(`this is ${this.x} and ${this.y} and ${this.z}`);
  }
}

let f = new classB(1, 2, 3);
f.sayYes();

// let items = [
//   { fname: "a", age: 34 },
//   { fname: "a", age: 34 },
//   { fname: "a", age: 34 }
// ];

// let mapOrder = items.map(item => {
//   return item.age;
// });

// console.log(mapOrder);
