$(document).ready(function() {

var dieArray = [1,2,3,4,5,6]
var roll = function() {
  return dieArray[Math.floor(Math.random()*dieArray.length)];
};

$("#roller").click(function() {
  var result = roll();
  alert(result);
});
});
