$(document).ready(function() {
  window.currentPlayer = 1;

  $('#1').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#2').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#3').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#4').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#5').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#6').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#7').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#8').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

  $('#9').on('click', function() {
    markSquare(this);
    disableButton(this);
    changePlayer();
  });

});

function markSquare(buttonSelector) {

  if (window.currentPlayer == 1) {
    $(buttonSelector).html("x");
  } else {
    $(buttonSelector).html("o");
  }

  return "button has been marked";

}

function changePlayer() {
  if (window.currentPlayer == 1) {
    window.currentPlayer = 2;
  } else {
    window.currentPlayer = 1;
  }

  console.log("Player has been changed to..." + window.currentPlayer);
  return window.currentPlayer;
}

function disableButton(buttonSelector) {
  $(buttonSelector).prop("disabled", "disabled");
  console.log("Disabled a button");
  return "Button has been disabled";
}
