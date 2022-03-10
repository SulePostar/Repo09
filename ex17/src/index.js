// Only change code below this line
function inverseWhile() {
  let fiveNumbers = "";
  let num = 5;
  while(num >= 0) {
    fiveNumbers += num;
    if(num > 0) fiveNumbers += ", ";
    num--;
  }
  return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
