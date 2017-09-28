var Person = require("./modules/Person"),
   $ = require("jquery");

var john = new Person("John Doe", "Yellow");
var jane = new Person("Jane Smith", "Grench");

john.greet();
jane.greet();
