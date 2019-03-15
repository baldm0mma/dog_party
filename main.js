function userDogRename() {
	var userInput = document.getElementById("header__form__input--text").value;
	document.getElementById("header__title--rename").innerHTML = userInput;
}