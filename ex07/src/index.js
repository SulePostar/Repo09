function randomRangeNumber(minNumber, maxNumber) {
  // Only change code below this line
  
  return Math.floor(Math.random() * (maxNumber-minNumber) + minNumber);
  
  // Only change code above this line
}


module.exports = randomRangeNumber;
