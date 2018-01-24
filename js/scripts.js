$(document).ready(function() {

var player1Result = [];
var player2Result = [];
var player1TurnScore = [];
var player2TurnScore = [];
var dieArray = [1,2,3,4,5,6]
var roll = function() {
  return dieArray[Math.floor(Math.random()*dieArray.length)];
};



$("#roller1").click(function() {
  var result = roll();
  if (result === 1) {
    player1TurnScore.length = 0;
    player1Result.push(0);
    $("#roller1").hide();
    $("#hold1").hide();
    $("#roller2").show();
  } else {
    player1TurnScore.push(result);
    $("#hold1").show();
  }
  alert(player1TurnScore);
});

$("#roller2").click(function() {
  var result = roll();
  if (result === 1) {
    player2TurnScore.length = 0;
    player2Result.push(0);
    $("#roller2").hide();
    $("#hold2").hide();
    $("#roller1").show();
  } else {
    player2TurnScore.push(result);
    $("#hold2").show();
  }
  alert(player2TurnScore);
});

$("#hold1").click(function() {
    $("#hold1").hide()
    $("#roller1").hide()
    $("#roller2").show()
    var turnScore = player1TurnScore.reduce(function (x, y) {
    return x + y;
    });
    player1Result.push(turnScore);
    var player1Score = player1Result.reduce(function (x,y) {
        return x + y;
      });
    player1TurnScore.length = 0;
    $(".p1Score").text(player1Score);
});

$("#hold2").click(function() {
    $("#hold2").hide()
    $("#roller2").hide()
    $("#roller1").show()
    var turnScore = player2TurnScore.reduce(function (x, y) {
    return x + y;
    });
    player2Result.push(turnScore);
    var player2Score = player2Result.reduce(function (x,y) {
        return x + y;
      });
    player2TurnScore.length = 0;
    $(".p2Score").text(player2Score);
});




});
