function makeDeepClone (obj) {
	var clone = {};
	for (var key in obj) {
		if (typeof obj[key] == "object") {
			clone[key] = makeDeepClone(obj[key]);
		} else {
			  clone[key] = obj[key];
		}
	}
	return clone;
};
