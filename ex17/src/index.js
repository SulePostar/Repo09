function inverseWhile() {
  var fiveNumbers = "";

  var i = 6;

  while (i > 0) {
    i--;
    if (i > 0) {
      fiveNumbers += i + ",";
    } else {
      fiveNumbers += i;
    }
  }

  return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;
