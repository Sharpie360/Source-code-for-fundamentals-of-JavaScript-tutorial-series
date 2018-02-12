/*
  Basic syntax for the "for loop statement"

  for(statement1; statement2; statement 2) {
	//code block to executed
  }

  ...statement 1 is executed before the loop (the code block) starts.
  ...statement 2 defines the condition for running the loop (the code block).
  ...statement 3 is executed each time afer the loop (the code block) has been executed.
*/


//for (initial value; condition; decrement) 
for(num = 10; num >= 0; num--){
	document.write("Loops " + num + "<p>");
}

