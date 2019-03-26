var getTheSameElements = function (array) {
	for(var i = 0; i <= array.length; ++i) {
		for(var j = i + 1; j <= array.length; ++j) {
			if(array[i] == array[j]) {
				return true;
			}
		}
}
return false;
}	
var example1 = [23, 52, 3, -21, 3];
var example2 = [0, -12, "tuk", 121];
getTheSameElements(example1);
getTheSameElements(example2);