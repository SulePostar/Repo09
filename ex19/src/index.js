// Only change code below this line
function myDoWhile() {
  let myNumbers = "";
  let i = 0;
  do{
    myNumbers += i;
    if(i < 9) myNumbers += ", ";
    i++;
  } while (i < 10);
  return myNumbers;
}
// Only change code above this line
console.log(myDoWhile());
module.exports = myDoWhile
