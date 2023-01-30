// Named function
function add(x, y) {
    return x + y;
  }
   console.log(add(3,4));
  // Anonymous function
  let myAdd = function (x, y) {
    return x + y;
  };

  //variables in functions
  let z = 100;
  function addToZ(x, y) {
    return x + y + z;
  }
  console.log(addToZ(3,4));

  function add2(x: number, y: number): number {
    return x + y;
  }
  /*function name(variableName1: type, variableName2: type): returnType {
    return variableName3;
  }
  */

//?
function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }
   
  let result1 = buildName("Bob"); // works correctly now
  //let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  let result3 = buildName("Bob", "Adams"); // ah, just right
  console.log(result1);
  console.log(result3);

//undefined
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
  }
   
  let result1 = buildName1("Bob"); // works correctly now, returns "Bob Smith"
  let result2 = buildName1("Bob", undefined); // still works, also returns "Bob Smith"
  //let result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  let result4 = buildName1("Bob", "Adams"); // ah, just right
  console.log(result1);
  console.log(result2);
  console.log(result4); 