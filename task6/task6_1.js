function sliceAnalogy (array, begin, end) {
	result = [];
	if ((typeof begin === "undefined") && (typeof end === "undefined")) {
		result = array;
    }
	else if (typeof end !== "undefined") {
		if ((begin < 0) && (end < 0)) {
			for (var i = array.length + begin; i < array.length + end; i++) {
				result[i] = array[i]
            }
        } else if (end < 0) {
			for (var i = begin; i < array.length + end; i++) {
				result[i] = array[i]
            }
        } else if (begin < 0) {
			for (var i = array.length + begin; i < end; i++) {
				result[i] = array[i]
            } 
        } else {
			for (var i = begin; i < end; i++) {
				result[i] = array[i];
            }
  	    }
    } else if (typeof end === "undefined") {		
		for (var i = begin; i < array.length; i++) {
			result[i] = array[i]
        }
    } return result;
}
