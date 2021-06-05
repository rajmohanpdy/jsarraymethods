const person = {
    name: "John",
    sayHello: function(){
      console.log("Hello");
    }
  }

  person.sayHello();

 let arr = ['a', 'aa', 'aaa'];

function find_longest(arr) {
  let longest = arr[0];
  arr.slice(2).forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });
  return longest;
}

// console.log(find_longest(arr));

function findLongestWord(str) {
  let array = str.split(' ');
  let maxLength = array[0].length;
  //for (var i = 0; i < array.length; i++) {
  array.forEach(elem => {
    if (elem.length > maxLength) {
      maxLength = elem.length;
    }
  });
  return maxLength;
}

let k = findLongestWord(
  'What if we try a super-long word such as otorhinolardsdsdsdynrgology'
);
console.log(k);
