/*

- take unlimited number of arguments [solved]
- we need atleast two arguments [solved]
- output an error message if argument is a not number [solved]

- goes through them
- print out their total sum
- if argument is not a whole number, skip it
- support negative numbers

*/

/*

three BFSS
-> console.log 
-> google/stack overflow
-> official mdn documentation

*/

const arguments = process.argv.slice(2);


if (arguments.length < 2) {
  console.log('Please provide atleast 2 arguments');
  process.exit();
}

for (const arg of arguments) {
  if (isNaN(arg)) {
    console.log('Please provide valid input');
    process.exit();
  }
}

const calculateTotalSum = (arrayToSum) => {
  let total =0 ;
  for(const item of arrayToSum) {
    const converted = Number(item);
      if (Number.isInteger(converted)) {
        total += converted;
      }
  }
  return total
}

// Code golfing - trying to do everything on one line)

const totalSum = calculateTotalSum(arguments);

const array = [1,2,3,4,5,6,7]

const addNumbers = (pineAppleArray) =>
  pineAppleArray.reduce(
    (acc, currValue) =>
      Number.isInteger(Number(currValue))
        ? Number(currValue) + Number(acc)
        : acc,
    0
  );

const fancyTotalSum = addNumbers(arguments);

console.log(totalSum);
console.log(fancyTotalSum);