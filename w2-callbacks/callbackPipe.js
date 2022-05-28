const numbers = [1,2,3,5,6,7,8,9,10];


const squaredCb = number => number * number;

const addHundred = number => number + 100;

const divideBy3 = number => number /3 

const applyOperations = (array, callbacks) => {
  const result = [];
  for(let item of array) {
    let cbOutput = item;
    for (let cb of callbacks) {
      cbOutput = cb(cbOutput);
    }
    result.push(cbOutput);
  }
  return result;
}

const resultOfOperations = applyOperations(numbers,[squaredCb, addHundred, divideBy3])

console.log(resultOfOperations);



















// const add10 = (array) => {
//   const result = [];
//   for (let item of array) {
//     result.push(item+10);
//   }
//   return result;
// };



// console.log(makeSquare(numbers));
// console.log(add10(numbers));