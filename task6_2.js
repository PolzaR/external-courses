function some (array, callback) {
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		if(callback(item, i, array)) {
			return true;
		} else {
		return false
        }
	}
}