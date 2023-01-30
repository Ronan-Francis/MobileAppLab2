//boolean 
var flag = true;
console.log("Boolean Value is: " + flag);
//numbers
var decimal = 6;
console.log("Decimal Value is: " + decimal);
var hex = 0xf00d;
console.log("Hex Value is: " + hex);
var binary = 10;
console.log("Binary Value is: " + binary);
var octal = 484;
console.log("Octal Value is: " + octal);
//let big: bigint = 100n;
//console.log("Value is: "+ big);
//strings
var color = "blue";
console.log("String value is: " + color);
color = 'red';
console.log("Changed String value is: " + color);
//string sentences
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ". \n\nI'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
var sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence2);
//arrarys
var list = [1, 2, 3];
console.log(list);
var list2 = [4, 5, 6];
console.log(list2);
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
console.log("Value is:" + x);
