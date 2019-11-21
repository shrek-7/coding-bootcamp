// create character map with frequency of each character
// in the string
function get_char_map(str) {
  // remove unnecessary characters and make str lowercase
  let formated_str = str.replace(/[^\w]/g, "").toLowerCase();
  let char_map = {};
  formated_str.split("").map(ele => {
    return (char_map[ele] = char_map[ele] + 1 || 1);
  });
  return char_map;
}

function get_sorted_string(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// function to check if 2 string are anagrams or not
// 2 strings are called anagrams when they have
// same frequency of characters in them.
function anagrams(first_string, second_string) {
  let first_str_map = get_char_map(first_string);
  let second_str_map = get_char_map(second_string);

  if (
    Object.keys(first_str_map).length !== Object.keys(second_str_map).length
  ) {
    return false;
  } else {
    let flag = true;
    Object.keys(first_str_map).map(ele => {
      if (first_str_map[ele] !== second_str_map[ele]) {
        flag = false;
      }
    });
    return flag;
  }
}

// Alternate solution
function anagram2(str_A, str_B) {
  // sort both the string and equate
  let formated_str_A = get_sorted_string(str_A);
  let formated_str_B = get_sorted_string(str_B);

  if (formated_str_A === formated_str_B) {
    return true;
  }
  return false;
}

console.log("Solution 1", anagrams("Hello", "ollhe"));
console.log("Solution 2", anagram2("hello", "ollhe"));
