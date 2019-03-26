function makeDeepClone (obj) {
	 var copy = JSON.parse(JSON.stringify(obj) );
	 return copy;
};
