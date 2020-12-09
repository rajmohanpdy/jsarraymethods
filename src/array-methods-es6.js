// const items = [
//   { name: "abishesk", age: 23 },
//   { name: "balaji", age: 45 },
//   { name: "chandru", age: 56 },
//   { name: "dravid", age: 45 },
//   { name: "ela", age: 67 }
// ];

// const items2 = [1, 2, 3, 4, 5, 6, 7, "van"];
// const item3 = { fname: "rajmohan" };

// // spread and rest

// let mes = [...items2, 9, 90];
// let mesd = { ...item3, lname: "sel" };
// console.log(mes);
// console.log(mesd);

// function test1(...args) {
//   console.log(args[2]); // new
// }

// test1(1, 2, 90);

// // const nume = 110;
// // const num2 = nume;
// // console.log(nume);
// // console.log(num2);

// // 1. filter
// // 2. map
// // 3. find
// // 4. foreach
// //5. some
// // 6.every
// //7.reduce
// //8. includes

// let output = items.filter(item => {
//   return item.age > 40;
// });
// console.log(output);

// let outputMap = items.map(item => {
//   return item.age;
// });
// console.log(outputMap);

// let outputFind = items.find(item => {
//   return item.age === 45;
// });
// console.log(outputFind);

// items.forEach(item => {
//   console.log(item.age);
// });

// let findSome = items.some(item => {
//   return item.name === "elad";
// });
// console.log(findSome);

// let findEvery = items.every(item => {
//   return item.age > 10;
// });
// console.log(findEvery);

// let findReduce = items.reduce((totalItem, item) => {
//   return item.age + totalItem;
// }, 0);
// console.log(findReduce);

// let findIncludes = items2.includes("van");
// console.log(findIncludes);

class classA {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }
  sayYes() {
    console.log(`this is ${this.x} ${this.y}`);
  }
}
class classB extends classA {
  constructor (x,y,z) {
    super(x,y);
    this.z = z;
  }
  sayNo() {
    console.log(`This is ${this.x} ${this.y} ${this.z}`);
  }
}

let m = new classB(1,2,3);
m.sayNo();