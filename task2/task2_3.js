function f (arr) {
    var evenNumbers = 0;
    var oddNumbers = 0;
    var zero = 0;
        for (i=0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && arr[i] !== 0) {
            evenNumbers = evenNumbers + 1;
            } else if (arr[i] % 2 !== 0) {
            oddNumbers = oddNumbers + 1;
            } else if (arr[i] === 0) {
             zero = zero + 1;
            };
        };
    console.log("четные: " + evenNumbers + "; нечетные: " + oddNumbers + "; ноль: " + zero);
    };
    f([1, 2, 3, 4]);
    f([1, 2, 3, 0]);
