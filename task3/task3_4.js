function f3 (string, obj) {
	if (string in obj) {
		return obj;
	} else {
		obj[string] = "new";
		return obj;
	}
};
