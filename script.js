
/* Global variables */
var who = "wooden shoe";
var joke = "Wooden shoe like to know!";
var expected = who + " who?";

/* Simple version */
function knock(){
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */
function knockCheck(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  // var expected = who + " who?";
  if (answer == expected) alert(joke);
  else alert("Huh?");
}

/* Best */
function knockAgain(){
  var knock = prompt("Knock Knock!");
  if (knock.includes("whos there") || knock.includes("who's there")){
    var answer = prompt(who);
    // var expected = who + " who?";
    if (answer == expected) alert(joke);
    // this next line is "recursion". 
    else askAgain();
  }
  else knockAgain();
}

function askAgain() {
  alert("Sorry, I didn't get that.");
  var answer = prompt(who);
  // what is the difference between = and ==?
  if (answer == expected) alert("There ya go! " + joke);
  else askAgain();
}