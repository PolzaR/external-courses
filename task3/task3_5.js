var clone = {};
function f4 (object) {
	for (var key in object) {
	  clone[key] = object[key];
	}
	return clone;
};
var obj = {
 name: "Ben",
 age: 21
};
