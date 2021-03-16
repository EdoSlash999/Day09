function myEqualFunction(num) {
  if (23 === num) {
    return "Equal";
  } 
    return "Not equal";
  
}
console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction("text"));
module.exports = myEqualFunction;
