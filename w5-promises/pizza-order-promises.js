// Promise is like an object -> when you request for a blocking piece of code/or request that may take time:
// setInterval
// setTimeout
// Sending request to the served
// reading files

// "Promise"

// -> Pending -> active, still ongoing
// -> Resolved -> fullfilled, we willed the promise
// -> Rejected -> promise is not fullfilled it's broken
// -> timeout

// -> error

//

const readlinePromise = require("./readline-promise");

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const new_order = {
  name: "",
  pizzaCrust: "",
  pizzaSauce: "",
};

rlp
  .question("What is your name?")
  .then((name) => {
    new_order.name = name;
    return rlp.question("Which crust you woud like?");
  })
  .then((pizzaCrust) => {
    new_order.pizzaCrust = pizzaCrust;
    return rlp.question("Which sauce you like");
  })
  .then((pizzaSauce) => {
    new_order.pizzaSauce = pizzaSauce;
    rlp.close();
  })
  .catch((error) => {
    console.log("Something went wrong!");
     rlp.close();
  }).finally(()=>{
      console.log(new_order);
  });


