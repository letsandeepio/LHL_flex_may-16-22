 const generateFakePromise = (afterDelay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), afterDelay);
  });
};

module.exports = { generateFakePromise}