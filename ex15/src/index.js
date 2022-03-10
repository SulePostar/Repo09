// Only change code below this line
function switchCase(letter) {
  let animal = "";
  switch (letter) {
    case "a":
      animal = "antelope";
      break;
    case "b":
      animal = "bird";
      break;
    case "c":
      animal = "cat";
      break;
    default:
      animal = "stuff";
      break;
  }
  return animal;
}
// Only change code above this line

module.exports = switchCase;
