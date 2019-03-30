//Я пока не нашла правильного решения задачи, но это тоже работает.
var currentValue = 0;
var Calculator = function () {
	this.add = function (a) {
		currentValue += a;
		return currentValue;
				
    };
	this.subtract = function (a) {
		currentValue -= a;
		return currentValue;
		
    };
	this.divide = function (a) {
		currentValue /= a;
		return currentValue;
    };
	this.multiply = function (a) {
		currentValue *= a;
		return currentValue;
    };
	this.getResult = function() {
		return currentValue;
    };
	this.reset = function () {
		currentValue = 0;
		return currentValue;
    }
	
}
var example = new Calculator();
example.add(3);
example.subtract(2);
example.multiply(20);
example.divide(4);
example.getResult();
example.reset();
example.add(100);
