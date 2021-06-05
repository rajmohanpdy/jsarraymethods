<<<<<<< HEAD
//  const items = [
//    { name: "abishesk", age: 23 },
//    { name: "balaji", age: 45 },
//    { name: "chandru", age: 56 },
//    { name: "dravid", age: 45 },
//    { name: "ela", age: 67 }
//  ];

//  const items2 = [1, 2, 3, 4, 5, 6, 7, "van"];
//  const item3 = { fname: "rajmohan" };

//  // spread and rest

//  let mes = [...items2, 9, 90];
//  let mesd = { ...item3, lname: "sel" };
//  console.log(mes);
//  console.log(mesd);

//  function test1(...args) {
//    console.log(args[2]); // new
//  }

//  test1(1, 2, 90);

//  // const nume = 110;
//  // const num2 = nume;
//  // console.log(nume);
//  // console.log(num2);

//  // 1. filter
//  // 2. map
//  // 3. find
//  // 4. foreach
//  //5. some
//  // 6.every
//  //7.reduce
//  //8. includes

//  let output = items.filter(item => {
//    return item.age > 40;
//  });
//  console.log(output);

//  let outputMap = items.map(item => {
//    return item.age;
//  });
//  console.log(outputMap);

//  let outputFind = items.find(item => {
//    return item.age === 45;
//  });
//  console.log(outputFind);

//  items.forEach(item => {
//    console.log(item.age);
//  });

//  let findSome = items.some(item => {
//    return item.name === "elad";
//  });
//  console.log(findSome);

//  let findEvery = items.every(item => {
//    return item.age > 10;
//  });
//  console.log(findEvery);

//  let findReduce = items.reduce((totalItem, item) => {
//    return item.age + totalItem;
//  }, 0);
//  console.log(findReduce);

//  let findIncludes = items2.includes("van");
//  console.log(findIncludes);

//  let name = 'Charlse';
//  let place = 'India';
//  let isPrime = bit => {
//    return (bit === 'P' ? 'Prime' : 'Nom-Prime');
//  }

//  // using template string
//  let messageTemplateStr = `Mr. ${name} is from ${place}. He is a ${isPrime('P')} member.`
//  console.log(messageTemplateStr);

//  const person = {
//    name: 'Adhikary',
//    age: 1
//  };

//  const age1 = person.age ?? 35;
//  const age2 = person.age || 35;

//  console.log(age1); console.log(age2);
// // // // let emp = {
// // // //   'id': 'E_01',
// // // //   'name': 'Jack',
// // // //   'age': 32,
// // // //   'addr': 'India'
// // // //  };

// // // //  let job = {
// // // //   'title': 'Software Dev',
// // // //    'location': 'Paris'
// // // //  };

// // // //  let jobs= {
// // // //   'titlew': 'Software Dev',
// // // //    'locationn': 'Paris'
// // // //  };

//   console.log(Object.assign({}, emp, job));
//   console.log(emp);
// // // // let m = Object.assign({}, emp, job, jobs);
// // // // console.log(m);

//  let isRequired = () => {
//    throw new Error('This is a mandatory parameter.');
//  }

//  let greetings = (name=isRequired(), message='Hello,') => {
//    return `${message} ${name}`;
//  }
//  console.log(greetings());

//  let isPrime = false;
//  const startWatching = () => {
//      console.log('Started Watching!');
//  }

//  isPrime && startWatching();

// // // console.log(window.location.search);

// // // let emojis = [1,2,2,3,3];
// // // console.log(Array.isArray(emojis));
// // // let obj = {};
// // // console.log(Array.isArray(obj));

// // // const isTrue  = !0;
// // // const isFalse = !1;
// // // const alsoFalse = !!!0;
// // // console.log(alsoFalse); // Result: true
// // // console.log(typeof isFalse); // Result: "boolean"

// // // const val = 1 ;
// // // console.log(val);
// // // console.log(typeof val);
// // let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // array.length = 4;
// // console.log(array); // Result: [0, 1, 2, 3]

// // var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
// // //fruits.splice(0, 1, "potato", "tomato");
// // //fruits.length = 0;
// // var fruitsObj = {...fruits}
// // console.log(fruitsObj[0]);
// // console.log(0 === '0');

// // let array = [0, 1, 2, 3, 4, 5, 6, 7, 8] ;
// // console.log(array.slice(-2)); // Equals [8]
// // Optional Chaining in javascript.
// // let customer = {
// //   name: "Foo",
// //   cars: {
// //     carOneTwo: "Audi",
// //     carTwo: "BMW",
// //   },
// // };

// // if (customer?.cars?.carOne) {
// //     console.log(`yes`);
// // } else {
// //     console.log(`no`);
// // }

// // let sym2 = Symbol('a');  // symbol is created
// // let sym3 = Symbol('a');  // symbol is created
// // console.log(sym3);

// // class classA {
// //     constructor(x, y) {
// //         this.x = x;
// //         this.y=y;
// //     }
// //     sayYello () {
// //         console.log(`this is an exmaple here and ${this.x} ${this.y}`);
// //     }
// // }
// // class classB extends classA {
// //     constructor(x,y) {
// //         super(x);
// //         this.y=y;
// //     }
// //     sayMaster () {
// //         console.log(`this is an exmaple here and ${this.x} ${this.y}`);
// //     }
// // }

// // let c = new classB(1,2);
// // c.sayMaster();
// // c.sayYello();

// const a = { duration: 50, title: '' };

// a.duration ||= 10;
// console.log(a.duration);
// // expected output: 50

// a.title ||= 'title is empty.';
// console.log(a.title);
// // expected output: "title is empty"

// import {person} from './ascy-await.js';
// console.log(person); 
// use default arguments instead of circuit
// function should do one thing
// avoid negative conditionals
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// function foo() {
//     var localVariable = 'private variable';
//     return function() {
//         return localVariable;
//     }
// }

// var getLocalVariable = foo();
// getLocalVariable() // "private variable"
// console.log(getLocalVariable())

// function foo() {
//     console.log(this);
// }

// foo() // window
// new foo() // foo
// console.log(foo());
// console.log(new foo());

//console.log(Boolean(0));  
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, undefined, null, 0, "", -0];
// //i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN

// const filter = arr.filter((x) => Boolean(x));
// console.log(filter); // [6, 7, 8, 9]

// const arrY = [2,4,6,8];
// const obj = { type: 'serviceBot', valid: true };
// console.log(typeof arrY);
// console.log(typeof obj);

// var add = (function(){
//     let accumulator = 0;
//     return function(value){
//         return accumulator+=value;
//     }
// })();

// console.log(add(3)); //output 3
// console.log(add(5)); //output 8
// console.log(add(7)); //output 15

// console.log("start");
// new Promise((resolve,reject)=>{
//     resolve({data:'hello world'});
// }).then(res=>{
//     console.log(res);
// })
// console.log("end");
// //outputs
// //start
// //end
// //{ data: 'hello world' }

// var example = "potato potato";
// console.log(example.replace(/pot/, "tom")); 
// // "tomato potato"
// console.log(example.replace(/pot/g, "tom")); 
// // "tomato tomato"
// var set2 = new Set("fooooooood"); 
// console.log(set2);

// var converted_number = 5 + "";
// console.log(typeof converted_number);
// // 5
// console.log(typeof converted_number); 
// to convert string to number this are two ways.
// var the_string = "123";
// console.log(+the_string + 9);

// let string = "1";
// let num = parseInt(string);
// console.log(string + 9);
//num will equal 1 as a int

// var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(my_list.sort(function() {
//     return Math.random() - 0.5
// })); 

// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObj =  {...fruits};
// console.log(fruitsObj[0]); 

// var fruits = ["apple", "apple", "banana" ,"banana","orange"];
// var meat = ["poultry", "beef", "fish"];
// var vegetables = ["potato", "tomato", "cucumber"];
// var food = [...fruits, ...meat, ...vegetables];
// console.log(Array.from(new Set(food))); 
// console.log([...new Set(food)]);

// class classA {
//     constructor (x,y) {
//         this.x=x;
//         this.y=y;
//     }
//     sayhello() {
//         console.log(`this is ${this.x} ${this.y}`)
//     }
// }

// let x = new classA (1,2);
// x.sayhello();
// const priceHistory = [450, 500, 330, 600, 910];

// // Find the minimum value.
// const minimumPrice = Math.random(...priceHistory);
// console.log(minimumPrice); // 330

// // Find the maximum value.
// const maximumPrice = Math.random(...priceHistory);
// console.log(maximumPrice); // 910

// function createMenu({ title, body, buttonText, cancellable }) {
//     console.log(title);
// }
  
//   createMenu({
//     title: "Foo",
//     body: "Bar",
//     buttonText: "Baz",
//     cancellable: true
//   });
// const number = [15, 40];

// number[2] = 65;

// number[3] = 80;

// console.log(number); //  [15, 40, 65, 80]
// console.log(Boolean(undefined)); //logs false
// let x = 5;

// x = (x++ , x += 10, x-=10);
// console.log(x);

// function addFive(num) {
//   return num + 5;
// }

// console.log((foo())); // console.logs 5. Declarations are loaded before any code can run.
// function foo() { return 5; }

// console.log(foo()); // ERROR! foo wasn't loaded yet
// var foo = function() { return 5; }
// console.log((!!NaN));
// const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
// const uniqueNums = [...new Set(numbers)];
// console.log(uniqueNums)
// console.log(isNaN(5)); //logs true
// console.log(parseInt(6));

// function Employee(name, position, yearHired) {
//     this.name = name;
//     this.position = position;
//     this.yearHired = yearHired;
//   };
  
//   const emp = new Employee("Marko Polo", "Software Developer", 2017);
//   console.log(emp['name']);
// var value = 0;
// const isTruthyOrFalsy = Boolean(value) ?  'truthy' : 'falsy';
// console.log(isTruthyOrFalsy);

// function formatNumber (num, decplaces) {
//   // convert in case it arrives as a string value
//   num = parseFloat(num);
//   // make sure it passes conversion
//   if (!isNaN(num)) {
//   // multiply value by 10 to the decplaces power;
//   // round the result to the nearest integer;
//   // convert the result to a string
//   var str = "" + Math.round (eval(num) * Math.pow(10,decplaces));
//   // exponent means value is too big or small for this routine
//   if (str.indexOf("e") != -1) {
//   return "Out of Range";
//   }
//   // if needed for small values, pad zeros
//   // to the left of the number
//   while (str.length <= decplaces) {
//   str = "0" + str;
//   }
//   // calculate decimal point position
//   var decpoint = str.length - decplaces;
//   // assemble final result from: (a) the string up to the position of
//   // the decimal point; (b) the decimal point; and (c) the balance
//   // of the string. Return finished product.
//   return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
//   } else {
//   return "NaN";
//   }
//  }

//  let x = formatNumber(2, 3);
//  console.log(x);

//  console.log(Object.is(0, 0));
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));

// console apply

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));
=======
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
>>>>>>> 336f9b0f75a26356d13be5a6dc9477569f34f05b
