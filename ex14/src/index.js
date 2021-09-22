function myForLoop1() {
  // Only change code below this line
  var evenNumbers = "";

  for (var i = 0; i <= 8; i += 2) {
    evenNumbers += i;

    if (i !== 8) {
      evenNumbers += ", ";
    }
  }

  return evenNumbers;
  // Only change code above this line
}

function myForLoop2() {
  // Only change code below this line
  var evenInverseNumbers = "";

  for (var i = 8; i >= 0; i -= 2) {
    evenInverseNumbers += i;

    if (i !== 0) {
      evenInverseNumbers += ", ";
    }
  }

  return evenInverseNumbers;
  // Only change code above this line
}

module.exports = {
  myForLoop1,
  myForLoop2,
};
