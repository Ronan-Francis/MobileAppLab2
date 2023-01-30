// Named function
function add(x, y) {
    return x + y;
}
console.log(add(3, 4));
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
//variables in functions
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(3, 4));
function add2(x, y) {
    return x + y;
}
/*function name(variableName1: type, variableName2: type): returnType {
  return variableName3;
}
*/
//?
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
console.log(result1);
console.log(result3);
