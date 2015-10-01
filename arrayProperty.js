//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

var ReverseConstructor = function(str) {
	this.reverse = function(str) {
		var count = 0;
		var reverse = '';
		for (var i = str.length - 1; i >= 0; i--) {
		reverse = reverse + str[i];
		count++;
		}
		return reverse;
	}
}	

var strClass = new ReverseConstructor();
strClass.reverse('class');


