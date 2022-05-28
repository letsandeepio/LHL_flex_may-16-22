const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    const cbOutput = callback(item);
    result.push(cbOutput);
  }
  return result;
};

const words = ['Lighthouse', 'Labs', 'Unicorn', 'Labbers'];

const candadianWords = map(words, (item) => `${item} eh!`);

console.log('canadianWords', candadianWords);
console.log('words', words);