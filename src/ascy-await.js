//simple Async /await
function scaryClown() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is an resolved message");
    }, 5000);
  });
}

async function msg() {
  const msg = await scaryClown();
  console.log("Message:", msg);
}

msg(); // Message: 🤡 <-- after 2 seconds

//Since what’s returned is a promise, you could do something like this instead:
async function hello() {
  return "Hello Alligator!";
}
const b = hello();
b.then((x) => console.log(x)); // Hello Alligator!

//Async Functions With Promise-Based APIS
function caserUpper(val) {
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}

async function msg(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch (err) {
    console.log("Ohh no:", err.message);
  }
}
msg("Hello"); // HELLO
msg(34); // Ohh no: val.toUpperCase is not a function
