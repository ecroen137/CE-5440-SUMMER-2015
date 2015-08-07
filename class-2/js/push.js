"user strict";

/*Create an array of 3 strings
Inspect array with console.dir()
Add another item to array using push()
Inspect array again with console.log()*/

var someArray = ["PA", "NJ", "MD"];
console.dir(someArray);
someArray.push("NY");
console.dir(someArray);
var a = someArray.indexOf("NJ");
console.log(a);
var b = someArray.indexOf("MT");
console.log(b);
