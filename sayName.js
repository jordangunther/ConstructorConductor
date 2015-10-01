//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var person1 = new Person('Jordan', 24);
var person2 = new Person('Britt', 20);
var person3 = new Person('Bex', 0);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
HELP
 this.sayName = function() {
 	alert(this.name);
 }
