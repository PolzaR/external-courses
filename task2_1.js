function task (x) {
    if (typeof x === "string") {
        console.log("string")
    } else if (typeof x === "number") {
        console.log("number")
    } else {
        console.log("undefined")
    }
};
task(1);
task("hello");
task(false);