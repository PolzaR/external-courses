// function removeSpace(string) {
//     return string.trim()
//     }
function removeSpace(str) {
    if (str[0] == " ") {
        var str = str.substr(1);
    }
	if (str[str.length - 1] == " ") {
		var str = str.substr(0, str.length - 1)
    }
	return str;
}