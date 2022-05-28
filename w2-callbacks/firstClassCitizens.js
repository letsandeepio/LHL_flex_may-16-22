// function declaration

function sayHi(){
  console.log("Hello World");
}

function add(num1, num2){
  return num1 + num2;
}

// Function Expression
// Function hoisting

const fancySayHi = () => {
  console.log("Fancy Hello World");
}

// Function invocation

add(10,5)

// First Class Citizens

const copyOfAdd = add;

const valueOfSum = add(1,2);

console.log(valueOfSum);

console.log(copyOfAdd(15,6))

// Functions as return values

const addAnother = (func, value) => {
    return function copy(anotherValue){
      return func(value) + anotherValue
    }
}

const squared = (value) => value * value;

const addSquared = addAnother(squared, 10);

console.log(addSquared(5));

