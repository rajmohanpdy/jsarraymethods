pick = (obj, ...props) => {
  //function pick(obj, ...props) {
  return props.reduce(function (result, prop) {
    result[prop] = obj[prop];
    return result;
  }, {});
};
const person = {
  name: "Pete",
  dog: "Daffodil",
  cat: "Omar",
};

const dogPerson = pick(person, "name", "dog");
console.log(dogPerson);
