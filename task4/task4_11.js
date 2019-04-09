function f(string) {
	var object = {};
	for(var i = 0; i < string.length; i++) {
		if (typeof ( object[string[i]] ) === "undefined") {
			object[string[i]] = 1;
        } else {
		object[string[i]]++;
        }
    } return object;
}