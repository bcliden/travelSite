function Person(name, color) {
   this.name = name;
   this.favColor = color;
   this.greet = function(){
      console.log("Oh hello! My name is " + this.name + " and " + this.favColor + " is my favorite color.");
   }
}

module.exports = Person;
