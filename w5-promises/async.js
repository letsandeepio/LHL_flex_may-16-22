console.log("first log");


setTimeout(()=>{
console.log("second log");
}, 2000)

setTimeout(() => {
  console.log("fourth log");
}, 1000);


console.log("third log");
