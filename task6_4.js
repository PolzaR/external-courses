function filter(array, callback) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
       	var item = array[i];
		if(callback(item, i, array)) {
            result.push(item);
        }
    }
    return result;
}