// Promise.all - wait for all to fulfill as RESOLVED
// Promise.allSettled - wait for all to fulfill, RESOLVED or REJECTED
// Promise.race - wait for the first promise to fulfill as RESOLVED
// Promise.any - wait for the first promise to fulfill, RESOLVED or REJECTED

const { generateFakePromise } = require("./utils/helpers");

const pizzas = [
  { name: "Veggie Delight", afterDelay: 5000 },
  { name: "Tropical Thunder", afterDelay: 2000 },
  { name: "Hawian", afterDelay: 3000 },
];
