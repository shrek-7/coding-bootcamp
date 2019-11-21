// funtion to accept an array and an integer N
// modify the array to create an array of chunks of size N
// example:
// input: [a, b, c, d, e] , N = 2
// output: [[a, b], [c, d], [e]]

//Input: [a,b,c,d,e,f], N = 3.
//Output: [[a,b,c][d,e,f]]

// Using Slice
(function chunk(arr, N) {
  let chunkArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i + N));
    i += N;
  }
  console.log(chunkArr);
})(["a", "b", "c", "d", "e", "f"], 2);

// ALternate solution without Slice
(function chunk(array, N) {
  let chunkArr = [];
  let dummy = [];
  for (let i = 0; i < array.length; i++) {
    dummy.push(array[i]);
    if (dummy.length === N || i === array.length - 1) {
      chunkArr.push(dummy);
      dummy = [];
    }
  }
  console.log(chunkArr);
})(["a", "b", "c", "d", "e", "f"], 4);
