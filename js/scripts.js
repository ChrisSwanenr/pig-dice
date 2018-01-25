$(document).ready(function() {

var dieArray = [];
var player1Result = [];
var player2Result = [];
var player1TurnScore = [];
var player2TurnScore = [];
//var twentyDieArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//var dieArray = [1,2,3,4,5,6]
var roll = function() {
  return dieArray[Math.floor(Math.random()*dieArray.length)];
};

$("#start").click(function() {
  var player1Name = $("input#player1Name").val();
  var player2Name = $("input#player2Name").val();
  var dieSelect = parseInt($("input:radio[name=dieType]:checked").val());
  $(".playerPanel").slideToggle();
  $("#startGame").slideToggle();

  if (player1Name == "") {
  $(".p1Name").text("Player 1");
  } else {
    $(".p1Name").text(player1Name);
  };

  if (player2Name == "") {
  $(".p2Name").text("Player 2");
  } else {
    $(".p2Name").text(player2Name);
  };

  for (var i = 1; i <= dieSelect; i++) {
    dieArray.push(i)
  };

})

$("#roller1").click(function() {
  var result = roll();
  if (result === 1) {
    player1TurnScore.length = 0;
    player1Result.push(0);
    $("#roller1").slideUp();
    $("#hold1").slideUp();
    $("#roller2").slideDown();
    $(".p1TurnScore").text("Turn Over");
  } else {
    player1TurnScore.push(result);
    $("#hold1").slideDown();
    $(".p1TurnScore").text("Current turn: " + player1TurnScore);
  };
});

$("#roller2").click(function() {
  var result = roll();
  if (result === 1) {
    player2TurnScore.length = 0;
    player2Result.push(0);
    $("#roller2").slideUp();
    $("#hold2").slideUp();
    $("#roller1").slideDown();
    $(".p2TurnScore").text("Turn Over");
  } else {
    player2TurnScore.push(result);
    $("#hold2").slideDown();
    $(".p2TurnScore").text("Current turn: " + player2TurnScore);
  }
});

$("#hold1").click(function() {
    $("#hold1").slideUp()
    $("#roller1").slideUp()
    $("#roller2").slideDown()
    var turnScore = player1TurnScore.reduce(function (x, y) {
    return x + y;
    });
    player1Result.push(turnScore);
    var player1Score = player1Result.reduce(function (x,y) {
        return x + y;
      });
    player1TurnScore.length = 0;
    $(".p1Score").text("Total score: " + player1Score);
    if (player1Score >= 100) {
      $(".playerPanel").slideUp();
      $("#p1Win").slideDown();
      $(".pyroRed").show();
    }
});

$("#hold2").click(function() {
    $("#hold2").slideUp()
    $("#roller2").slideUp()
    $("#roller1").slideDown()
    var turnScore = player2TurnScore.reduce(function (x, y) {
    return x + y;
    });
    player2Result.push(turnScore);
    var player2Score = player2Result.reduce(function (x,y) {
        return x + y;
      });
    player2TurnScore.length = 0;
    $(".p2Score").text("Total score: " + player2Score);
    if (player2Score >= 100) {
      $(".playerPanel").slideUp();
      $("#p2Win").slideDown();
      $(".pyroBlue").show();
    }
});

$(".restart").click(function() {
  player1Result.length = 0
  player2Result.length = 0
  $("#startGame").slideDown();
  $("#p2Win").slideUp();
  $("#p1Win").slideUp();
  $(".pyroBlue").hide();
  $(".pyroRed").hide();
  $(".p2Score").text("");
  $(".p1Score").text("");
  $(".p1TurnScore").text("");
  $(".p2TurnScore").text("");


})




});
