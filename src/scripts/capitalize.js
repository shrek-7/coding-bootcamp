// function to take a sentence as an argument and
// capitalize first letter of each word in the sentence.

// input: 'hey there, it's dexter'
// output: 'Hey There, It's Dexter'

// input:  'today is a good day.'
// output: 'Today Is A Good Day'

function capitalize(sentence) {
  console.log("input:", sentence);
  let wordsArray = sentence.split(" "); // split the sentence by spaces
  let capsArray = [];

  for (let i of wordsArray) {
    let caps = i[0].toUpperCase() + i.slice(1); // capitalize the first letter and append it to rest of the characters.
    capsArray.push(caps);
  }

  return capsArray.join(" "); // join by space.
}

console.log("output", capitalize("today is a good day."));
console.log("output", capitalize("hey there, it's dexter"));
