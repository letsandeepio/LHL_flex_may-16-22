// Live code a forEachInReverse that does reverse iteration on an array and takes a cb much like forEach would.


const squaredCb = (number) => console.log(number * number);


const forEachInReverse = (array, cb) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const currentItem = array[i];
    cb(currentItem);
  }
};

// forEachInReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], squaredCb);

const words = ["Lighthouse","Labs","Unicorn","Labbers"];

console.log(words.map((item) => `${item} eh!`));


//const candadianWords = words.map((item)=>`${item} eh!`);

//console.log(candadianWords);
console.log(words)