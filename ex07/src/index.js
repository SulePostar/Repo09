function randomRangeNumber(minNumber,maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }
  
  console.log(randomRangeNumber(0,1));
  console.log(randomRangeNumber(2,3));
  console.log(randomRangeNumber(4,10));
  console.log(randomRangeNumber(3,4));
  console.log(randomRangeNumber(100,101));
  
  module.exports = randomRangeNumber;
  