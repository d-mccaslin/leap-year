$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefaults();
    const userInput = parseInt($("input#yearInput").val());
    if (isLeapYear(userInput)) {
      
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