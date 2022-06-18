const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("What is your name?",(userName)=>{

  rl.question("What kind of crust you like?", (pizzaCrust) => {

    rl.question("What kind of sauce you like?", (pizzaSauce) => {
      rl.question("What kind of toppings you like?", (pizzaToppings) => {
        rl.question("What kind of cheese you like?", (pizzaCheese) => {
          console.log(`Hi! ${userName}. Your order details.\n ${pizzaCrust}${pizzaSauce}${pizzaToppings}${pizzaCheese}`);
          rl.close();
        });
      });
    });
  });
})


