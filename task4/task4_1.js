function f(property, object) {
	for (var key in object) {
		if ( key === property ) {
			if ( object.hasOwnProperty(property) ) {
                    return false;
            } else {
                    return true;
            }
        } 
    }
}

var obj1 = {
job: "waiter",
salary: 1000
};
var obj2 = Object.create(obj1);
obj2.name = "John";