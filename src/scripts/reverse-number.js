const reverseIt = N => {
  let revStr = N.toString()
    .split("")
    .reverse()
    .join("");

  let revNum = parseInt(revStr, 10) * Math.sign(N);
  // Math.sign return 1 when number > 0 and  -1 when < 0.

  return revNum;
};

console.log(reverseIt(1002));
console.log(reverseIt(100));
console.log(reverseIt(500));
console.log(reverseIt(-1));
console.log(reverseIt(-102));
