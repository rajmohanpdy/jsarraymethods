// repalce nested if-else statements with guard classes. 
//In computer programming, a guard is a boolean expression that must evaluate to true if the program execution is to continue in the branch in question.
const calculatePercentageHeight = (width, height) => {
  const result = (height * 100) / width;

  if (Number.isNaN(result)) return 0; // guard clause
  if (Number.isInteger(result)) return result; // guard clause

  return result.toFixed(2);
};

// use function
console.log(calculatePercentageHeight(50, 50)); // result 100
console.log(calculatePercentageHeight(50, 0)); // result 0
