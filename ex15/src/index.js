function myDoWhile () {
  // Only change code below this line
  var myNumbers = "";
  
  var i = 0;

  do {
    myNumbers += i;

    if (i !== 9) {
      myNumbers += ", ";
    }

    i++;
  
  } while (i < 10);

  return myNumbers;
  // Only change code above this line
}

module.exports  =  myDoWhile