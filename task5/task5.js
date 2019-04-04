var Calculator = (function() {
	var currentValue = 0;
		
	return {
		add: function add(x) {
			if ( typeof (x) == "undefined" ) {
				x = 0;
			};
			currentValue = currentValue + x;
			return add;
		},
		subtract: function subtract(x) {
			if ( typeof (x) == "undefined" ) {
				x = 0;
			};
			currentValue = currentValue - x;
			return subtract;
        },
		multiply: function multiply(x) {
			if ( typeof (x) == "undefined" ) {
				x = 0;
			};
			currentValue = currentValue * x;
			return multiply;
        },
		divide: function divide(x) {
			if ( typeof (x) == "undefined" ) {
				x = 0;
			};
			currentValue = currentValue / x;
			return divide;
        },
		getResult: function getResult() {
			return currentValue;
        },
		reset: function reset() {
			currentValue = 0;
			return currentValue;
        }
    }
})();

Calculator.add(4);
Calculator.subtract(1);
Calculator.add(4)(1);
console.log(Calculator.getResult())
Calculator.add()();
console.log(Calculator.reset());
Calculator.subtract(1)(1)(1)(2);