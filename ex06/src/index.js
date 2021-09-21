function comparisonToEqual(a) {
  // Only change code below this line
  if (a < 10) {

    if (a < 5) {
    
      return "Less than 5";
    }
    
    return "Less than 10";
  }
  
  if (a >= 10) {
  
    if (a > 20) {
  
      return "More than 20";
  
    }
  
    return "10 or over";
  
  }
  // Only change code above this line
}

module.exports = comparisonToEqual;
