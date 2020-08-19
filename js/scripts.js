$(document).ready(function() {
  $("#year").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#yearInput").val());
    if (isLeapYear(userInput)) {
      $("#result").text(userInput + " is a leap year!");
    } else {
      $("#result").text(userInput + " is not a leap year :(");
    }
  });
})

//business logic
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}