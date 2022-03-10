// Only change code below this line
function inverseWhile() {
  var res = "";
  var num = 5;
  while(num >= 0) {
    res += num;
    if(num > 0) res += ",";
    num--;
  }
  return res;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
