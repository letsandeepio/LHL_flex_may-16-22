const numbers = [1,2,3,5,6,7,8,9,10];


const squaredCb = number => number * number;

const addHundred = number => number + 100;

const divideBy3 = number => number /3 

const applyOperation = (array, callback) => {
  const result = [];
  for(let item of array) {
    const cbOutput = callback(item);
    result.push(cbOutput);
  }
  return result;
}

const numbersSquared = applyOperation(numbers, squaredCb)

const numberHundredAdded = applyOperation(numbers, addHundred);

const numberDividedByThree = applyOperation(numbers, divideBy3);

console.log(numbersSquared);
console.log(numberHundredAdded);
console.log(numberDividedByThree);





















// const add10 = (array) => {
//   const result = [];
//   for (let item of array) {
//     result.push(item+10);
//   }
//   return result;
// };



// console.log(makeSquare(numbers));
// console.log(add10(numbers));