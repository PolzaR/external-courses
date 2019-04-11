function sliceAnalogy (array, begin, end) {
	var result = [];

	if ((typeof begin === "undefined") && (typeof end === "undefined")) {
		result = array;
    };
	if (typeof begin === "undefined") {
		begin = 0;
    };
	if (typeof end === "undefined") {
		end = array.length;
	};
	if (begin < 0) {
		begin = array.length + begin;
	}; 
	if (end < 0) {
		end = array.length + end;
	};
    for (var i = begin; i < end; i++) {
			result[i] = array[i]
		}
		
    return result;
}