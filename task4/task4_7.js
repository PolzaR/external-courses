var f = function(string) {
	var firstStep = string.split(" ");
	for (var i = 0; i < firstStep.length; i++) {
		firstStep[i] = firstStep[i][0].toUpperCase() + firstStep[i].slice(1).toLowerCase();
    }
	var secondStep = firstStep.join("");
	var lastStep = secondStep[0].toLowerCase() + secondStep.slice(1);
	return lastStep;

}