function myFirstMethod() {

let paragraphElement=document.getElementById("paragraph");

	alert("You just got home, your parents car is in the driveway. Unlike any other day however, the lights are all off and you can't hear any noise inside.");

	var outsideHouse;
	do {
	 alert("Please type one of the three options.");
	 outsideHouse = (prompt("What would you like to do: enter, look for parents in town, or just leave?"));
	} while(outsideHouse != "enter" && outsideHouse != "look for parents" && outsideHouse != "leave")

		if(outsideHouse == "enter")	{
			alert("You open the door and enter, the lights are off.")
			var lights;
			do{
				alert("Please type 'yes', 'no', or 'leave'.")
				lights = (prompt("Would you like to turn the lights on?"))
			} while(lights != "yes" && lights != "no" && lights != "leave")

			if(lights == "yes") {
				alert("You turned the lights on.")
				var kitchen;
				do{
					alert("Please type 'Yes' or 'No'.")
					kitchen = (prompt("You are hungry, would you like to go to the kitchen?"))
				} while(kitchen != "Yes" && kitchen != "No")

				if(kitchen == "Yes") {
					alert("You enter the kitchen only for your entire family to be waiting there. They were there to throw you a surprise birthday party.")
				}

				if(kitchen == "No") {
					alert('You decided to sit down and watch TV. Before you turned the TV on, your parents yelled from the kitchen telling you to come in. You walk in and the rest of your family jumps out yelling "Surprise"')
				}
			}

			if(lights == "no") {
				alert("You decided to sit alone in the dark like some sort of weirdo.")
			}

			if(lights == "leave") {
				alert("For some reason you decided to leave after only just getting home. Your parents came running out yelling for you.")
			}
		}
		if(outsideHouse == "look for parents") {
				alert("\You went to search for your parents in town, after an hour your parents called you asking why you weren't home. You quickly ran back home.")
		}
		if(outsideHouse == "leave") {
				alert("You decided it wasn't worth questioning, but didn't want to enter. Have fun in town.")
				}

}
