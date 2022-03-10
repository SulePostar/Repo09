// Only change code below this line
function myForLoop1() {
  let evenNumbers = "";
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      evenNumbers += i;
      if (i < 8) evenNumbers += ", ";
    }
  }
  return evenNumbers;
}

function myForLoop2() {
  let evenInverseNumbers = "";
  for (let i = 8; i >= 0; i--) {
    if (i % 2 === 0) {
      evenInverseNumbers += i;
      if (i > 0) evenInverseNumbers += ", ";
    }
  }
  return evenInverseNumbers;
}
// Only change code above this line

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = { myForLoop1, myForLoop2 }
