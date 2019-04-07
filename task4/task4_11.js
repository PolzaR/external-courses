function f(string) {
	var array = [];
	var object = {};
	for(var i = 0; i < string.length; i++) {
		array.push(string[i]);
    }
	for(var j = 0; j < array.length; j++) {
		if (typeof ( object[array[j]] ) === "undefined") {
			object[array[j]] = 1;
        } else {
		object[array[j]]++;
        }
    } return object;
}