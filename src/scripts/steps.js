console.log("hi");

// input: 3
// ouput:
// #
// ##
// ###

// Normal solution
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//       str += "# ";
//     }
//     console.log(str);
//   }
// }

//recursive solution
function steps(n, row = 0, str = "") {
  if (n === row) return;

  if (n === str.length) {
    // to check if row is complete
    console.log(str);
    return steps(n, row + 1);
  }

  if (str.length <= row) {
    str += "#";
  } else {
    str += " ";
  }

  steps(n, row, str);
  // since we have to work on same row and same str in next iteration
}

steps(3);
