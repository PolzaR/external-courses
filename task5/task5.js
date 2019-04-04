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



var Calculator = (function(x) {
	var currentValue = 0;
		
	return {
		add: function(x) {
			return currentValue += x;
        },
		subtract: function(x) {
			return currentValue -= x;
        },
		multiply: function(x) {
			return currentValue *= x;
        },
		divide: function(x) {
			return currentValue /= x;
        },
		getResult: function() {
			return currentValue;
        },
		reset: function() {
			currentValue = 0;
			return currentValue;
        }
    }
})();
Calculator.add(90);
Calculator.subtract(20);
Calculator.multiply(2);
Calculator.divide(7);
Calculator.getResult();
Calculator.reset();
Calculator.add(21);
Calculator.getResult();

var Calculator = (function(x) {
	var currentValue = 0;
		
	return {
		add: function(x) {
			return function(y) {
				return currentValue = currentValue + y + x;
            }
        },
		subtract: function(x) {
			return currentValue -= x;
        },
		multiply: function(x) {
			return currentValue *= x;
        },
		divide: function(x) {
			return currentValue /= x;
        },
		getResult: function() {
			return currentValue;
        },
		reset: function() {
			currentValue = 0;
			return currentValue;
        }
    }
})();



var Calculator = (function(x) {
	var currentValue = 0;
		
	return {
		add: function(x) {
			currentValue = x;
			function f(y) {
				if (y === undefined) {
					return currentValue;
                } else {
					currentValue += y;
					return second;
				}
            }
        },
		subtract: function(x) {
			return currentValue -= x;
        },
		multiply: function(x) {
			return currentValue *= x;
        },
		divide: function(x) {
			return currentValue /= x;
        },
		getResult: function() {
			return currentValue;
        },
		reset: function() {
			currentValue = 0;
			return currentValue;
        }
    }
})();
