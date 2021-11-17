function myFirstMethod() {

	let paragraphElement=document.getElementById("paragraph");

	alert("I'm thinking of a number 1-100.");
	console.log("sends text to browser console");


	var answer = Math.floor(Math.random()*100)+1

  for(let count = 0; number != answer; count += 1) {
		var number = parseFloat(prompt("What number am I thinking of?"));

		if(number == answer)	{
			alert("You are correct, and it took "+count+" tries.");
		}
		if(number > answer)	{
			console.log("That answer is too high.");
			alert("That answer is too high.");
		}

		if(number < answer)	{
			console.log("That answer is too low.");
			alert("That answer is too low.");
		}
	}
}
