// var a = 5; 
// var b = a; 
// b=3;
// console.log(a); 
// console.log(b); 
// var c = { greeting : 'Welcome' }; 
// var d; 
// d = c; 

// // Mutating the value of c 
// c.greeting = 'Welcome to geeksforgeeks'; 
// console.log(c); 
// console.log(d); 
// let original = 10;
// function updateOriginal(original) {
//     original += 10;
//     console.log(original);
// }
// updateOriginal(original);
// console.log(original);
// var b = "String";
// var result;
// result = (typeof b == "string" ? "B is String" : "Bis Numeric");
// console.log(result);
// const [a,b] = [1,2];
// console.log(a+b);

// var c = { greeting : 'Welcome' }; 
//     var d; 
//     d = c; 
  
//     // Mutating the value of c 
//     c.greeting = 'Welcome to geeksforgeeks'; 
//     console.log(c); 
//     console.log(d); 
function multiply(a,b){
  return a*b;
}

// function currying(fn){
//   return function(a){
//     return function(b){
//       return fn(a,b);
//     }
//   }
// }

// var curriedMultiply = currying(multiply);

// multiply(4, 3); // Returns 12

// curriedMultiply(4)(3); // Also returns 12
// // console.log(multiply(4, 3));
// // console.log(multiply(4, 3));

// function add (a) {
//   return function(b){
//     return a + b;
//   }
// }

// add(3)(4)
// console.log(add(3)(4))
// let  a = "rajmohan";
// a= "yy";
// console.log(a);
// function* iteratorFunc() {
//   let count = 0;
//   for (let i = 0; i < 10; i++) {
//       count++;
//       yield i;
//   }
//   return count;
// }

// let iterator = iteratorFunc();
// console.log(iterator.next()); // {value:0,done:false}
// console.log(iterator.next()); // {value:1,done:false}
// console.log(iterator.next()); // {value:2,done:true}
// console.log(iterator.next()); // {value:2,done:true}
// console.log(iterator.next()); // {value:2,done:true}
// console.log(iterator.next()); // {value:2,done:true}

// const name = [1,2,3,4];
// name. length = 0;
// console.log(name[0]);

// function greet() {
//   console.log('Hello'); 
// }

// (function greet() {
//   console.log('Hey'); 
// })(4); // "Hey"

// greet() // Hey

// function isItHoisted() {
//     console.log("Yes!");
// }
// isItHoisted();

// var i = 0, j = 0;

// console.log(++i);  // alerts 1
// console.log(i);

// console.log(j++);  // alerts 0
// console.log(j);
//How to check if array is empty javascript
const  objectAVerify  ={name: "John", age: 31, city: "New York"};
console.log(Object.values(objectAVerify)[0]);
