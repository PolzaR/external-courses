function every (array, callback) {
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		if(!(callback(item, i, array))) {
			return false;
		} 
		
        } return true;
}