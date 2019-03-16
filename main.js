function userDogRename() {
	
	var userInput = document.getElementById("header__form__input--text").value;
	// I decided to add a little fun piece to the project.
	// My dog's name is "Calvin," and if his name is typed in the renaming input, HIS photo will replace the other dog's photo also.
	if (userInput === "Calvin") {
		document.getElementById("header__title--rename").innerHTML = userInput;
		document.getElementById("js_change_dog").src="images/Calvin.jpg"
	} else {
		document.getElementById("header__title--rename").innerHTML = userInput;
	}
}