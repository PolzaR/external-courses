function makeTheFirstCapital(str) {
    var arr = str.split(" ");
    for (var i = 0, x = arr.length; i < x; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
}