function reduce(array, callback, initialValue) {
    if (typeof initialValue === "undefined") {
        var previousValue = array[0];
        var startPoint = 1
    } else if (typeof initialValue !== "undefined") {
        previousValue = initialValue;
        var startPoint = 0;
    }
    for(var i = startPoint; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue
}
