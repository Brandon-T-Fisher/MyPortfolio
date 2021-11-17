//here will be the function that runs when the page loads...
//Note that in a web browser you need to hit the F12 key to see the console tab
// and see the printed results below.

function myFirstMethod() {

	//Three ways to communicate with user in JavaScript
	//two ways to simply send messages only to user
	alert("Send user a warning message in a dialog box");
	console.log("sends text to browser console");

	//How to get a boolean from USER
	var myBoolean = confirm("Hit ok to send me a TRUE or Cancel to send me a FALSE value");

	console.log("You sent me a " + myBoolean);

    if(myBoolean) {
		console.log("Since myBoolean is true, that means you hit the OK button.");
	} else {
		console.log("Since myBoolean is false, that means you hit the cancel button");
	}
  //use prompt function to get string or number values from user.
	var myString = prompt("Ask for a string from the user using PROMPT command.");

	console.log("You were prompted and responded with the string "+myString);
  //use parseFloat to get number from a string.
	var myAge = parseFloat(prompt("Give me your age"));
	console.log("Your age is "+myAge+ ".  Notice how the code uses parseFloat on the string to get the number");
	//make decisions here on whether or not they can get into the movie.
	//if (age > 18) {  tell them they are in } 
	// else {
	// ask if they have an adult with them
  // if they do
  //     tell them they cna go in with parents permission
  // else {
  // 		 tell them they can't get in.
  //}
}
