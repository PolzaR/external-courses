function map (array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		result[i] = callback(item, i, array)
			}
			return result;
}