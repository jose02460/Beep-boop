//Business Logic

var numberArray = function(input) {
  var userList = [];
  if (isNaN(input)) {
    return "Input error: Please enter a numerical value.";
  } else
  {
    for (var i = 0; i <= userInput; i++) {
      if ((i % 3) === 0) {
        return "I'm sorry, Dave. I'm afraid I can't do that!";
      } else if {
        for (var j = 0; j < arr[i].length; j++) {
          if (j === 0) {
            return i.splice(j, 1, "Beep!");
          } else if (j === 1) {
            return i.splice(j, 1, "Boop!");
          })
      })

  }
}
}

//User Interface Logic

var userInput;
var userOutput;
$(document).ready(function() {
  $("#num-form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-num").val());

    userOutput = numberarray(userInput);
    alert(userOutput);

  });
