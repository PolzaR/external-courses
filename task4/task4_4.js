function changeTheFirstSymbol(string) {
	var firstSymbol = string[0].toUpperCase();
	string = firstSymbol + string.slice(1);
	return string; 
}