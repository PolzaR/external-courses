function roundToThree(num1, num2) {
	var result = num1 + num2;
	return (Math.round(result * 1000) / 1000);
};