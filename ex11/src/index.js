function switchCase(letter) {

  // Only change code below this line
  var animals = "";

  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      animals = "stuff";
  }
  // Only change code above this line
  
  return animals;
}

module.exports = switchCase;
