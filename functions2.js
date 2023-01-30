//Part A
console.log("*PART A*");
var y = 6;
function countChar(x) {
    return x.length;
}
var string1 = "test 1";
var string2 = "Ronan";
console.log(countChar(string1));
console.log(countChar(string2));
//Part B
console.log("*PART B*");
string1 = "test 1";
function countCharExSpace(x) {
    return x.replace(/\s/, "").length;
}
console.log(countCharExSpace(string1));
//Part C
console.log("*PART C*");
string1 = "test 1";
string2 = "Ronan";
function countCharExSpaceOrNot(x, num) {
    if (num == 1)
        return x.replace(/\s/, "").length;
    else
        return x.length;
}
console.log(countCharExSpaceOrNot(string1, 1));
console.log(countCharExSpaceOrNot(string2, 1));
console.log(countCharExSpaceOrNot(string1));
console.log(countCharExSpaceOrNot(string2));
