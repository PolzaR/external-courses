function f3 (string, obj) {
	if (!obj[string]) {
		obj[string] = "new";
	}
	
	return obj;
};
