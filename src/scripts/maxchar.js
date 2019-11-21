// program to find the character in string with highest frequency.
let str = "Hello World !";
MaxChar(str);

function MaxChar(str) {
  let charMap = {};
  let maxCount = 0;
  let Maxchar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      Maxchar = char;
      maxCount = charMap[char];
    }
  }

  console.log("Character map of String: ", charMap);
  console.log(Maxchar, ":", maxCount);
}
