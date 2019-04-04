function f8(string, number) {
	var stringLength = string.length;
	if (stringLength > number) {
		var newString = string.substr(0,number-3);
    } return newString + "...";
}