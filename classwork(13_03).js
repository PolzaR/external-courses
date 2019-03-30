function User (name, age) {
    this.name = name;
    this.age = age
}
var user_1 = new User("Mike", 20);
var user_2 = new User("John", 22);
var user_3 = new User("Steve", 40);
var user_4 = new User("Mary", 32);
var user_5 = new User("Lucy", 29);
var user_6 = new User("Bob", 27);
var user_7 = new User("Jack", 50);
var arr = [user_1, user_2, user_3, user_4, user_5, user_6, user_7];
var searchByAge;
for(var i = 0; i < arr.length; i++) {
   if (arr[i].age === 27) {
    searchByAge = arr[i];
    searchByAge.name = "David";
    searchByAge.age = 25;
    searchByAge.salary = 30000;
    console.log(searchByAge);
   }
};
for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === "Mary") {
        var searchByName = arr[i];
        delete searchByName.age;
        searchByName.husband = searchByAge;
		console.log(searchByName);
    }
};
