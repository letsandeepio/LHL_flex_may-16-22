// Higher order function

const mars = () => {
  return "mars"
}

const hello = (world) => {
  console.log("Hello " + world());
}

// hello(mars);

// Array forEach, map, reduce

const array = [1,2,3,5,7,8,10];

array.forEach(function(value){
  console.log(value);
});