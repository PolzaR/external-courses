function reduce(array, callback, initialValue) {
    if (typeof initialValue === "undefined") {
        var previousValue = array[0];
        for(var i = 1; i < array.length; i++) {
            previousValue = callback(previousValue, array[i], i, array);
        }
    } else if(typeof initialValue !== "undefined") {
        previousValue = initialValue;
        for(var i = 0; i < array.length; i++) {
            previousValue = callback(previousValue, array[i], i, array);
        }
    }
    return previousValue;
}