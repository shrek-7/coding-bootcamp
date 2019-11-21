// using reduce
const reverseIt = str =>
  str.split("").reduce((initial, current) => current + initial, "");

let str = "SHREYAS";
var reversedString = reverseIt(str);

console.log("INPUT : ", str);
console.log("OUTPUT : ", reversedString);

// Alternate Solutions
// #1
/**
  const reverseIt = str => {
  return str
    .split("")
    .reverse()
    .join("");
  };

*/

// #2  without using reverse method
/**
  const reverseIt = str => {
    let rev = "";

    for (let char of str) {
      rev = char + rev;
    }
    return rev;
  }; 
 */
