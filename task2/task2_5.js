// function getMaxOfArray(arr) {
//     return Math.max(...arr);
//     };
//     console.log(getMaxOfArray([1, 4, 5, -5, 10, -44, 0]));

    var getMax = function (array) {
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    };
