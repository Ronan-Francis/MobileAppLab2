//boolean 
let flag: boolean = true;
console.log("Boolean Value is: "+ flag);


//numbers
let decimal: number = 6;
console.log("Decimal Value is: "+ decimal);

let hex: number = 0xf00d;
console.log("Hex Value is: "+ hex);

let binary: number = 0b1010;
console.log("Binary Value is: "+ binary);

let octal: number = 0o744;
console.log("Octal Value is: "+ octal);

//let big: bigint = 100n;
//console.log("Value is: "+ big);

//strings
let color: string = "blue";
console.log("String value is: "+ color);
color = 'red';
console.log("Changed String value is: "+ color);

//string sentences
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. 

I'll be ${age + 1} years old next month.`;
console.log(sentence);
let sentence2: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
  console.log(sentence2);

//arrarys
let list: number[] = [1, 2, 3];
console.log(list);
let list2: Array<number> = [4, 5, 6];
console.log(list2);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
console.log("Tuple is: "+x);