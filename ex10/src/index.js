function mathTest (x, y) {
  // Only change code below this line

  if(x < 0 || y < 0) return undefined;

  let result = Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));

  return result;

  // Only change code above this line
}

console.log(mathTest(2, 2));
console.log(mathTest(-2, -2));
console.log(mathTest(2, -2));
console.log(mathTest(-2, 2));
console.log(mathTest(2, 8));
console.log(mathTest(3, 3));
console.log(mathTest(0, 0));

module.exports = mathTest;