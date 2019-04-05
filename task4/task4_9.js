function f(string1, string2, number) {
	var result = [];
	var string1 = string1.split(" ");
	for (var i = 0; i < string1.length; i++) {
		result.push(string1[i]);
		if (i === number) {
				result.push(string2);
        }
    } return result.join(" ");

}