//Part A
console.log("*PART A*");
let y: number = 6;
function countChar(x: String){
return x.length;
}
let string1: string = "test 1";
let string2: string = "Ronan";
console.log(countChar(string1));
console.log(countChar(string2));

//Part B
console.log("*PART B*");
string1 = "test 1"
function countCharExSpace(x: String){
    return x.replace(/\s/, "").length;
}
console.log(countCharExSpace(string1));

//Part C
console.log("*PART C*");
string1 = "test 1";
string2 = "Ronan";
function countCharExSpaceOrNot(x: String, num?:number){
    if(num == 1)return x.replace(/\s/, "").length;
    else return x.length;
}
console.log(countCharExSpaceOrNot(string1, 1));
console.log(countCharExSpaceOrNot(string2, 1));
console.log(countCharExSpaceOrNot(string1));
console.log(countCharExSpaceOrNot(string2));
