// count the number of vowels in the given string.

function vowelCount(str) {
  let matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

function vowelCount2(str) {
  let vowel = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("hello world!"));
console.log(vowelCount2("hello world!"));
