/***
 * if a => 1,
 * b => 2,
 * c => 3,
 * ...
 * z => 26
 *
 * write a function to return a number of decoded message from a given string.
 *
 * input "12"
 * output: 2 ( 'AB', 'L' ) L is 12
 *
 * input "01"
 * output: 0 ( 0 doesn't have a value, 01 also have no value )
 *
 */

const Helper = (data, N) => {
  if (N === 0) return 1;
  if (data[0] === "0") return 0;

  let result = Helper(data, N-1);

  if(N >=2 && Number(data.substring(0,2)) <= 26 ){
    result += Helper(data, N-2)
  }

  return result;

};

const Decode = str => {
  let st = str.trim();
  return Helper(st, st.length);
};

console.log("Number of ways : ", Decode("2134"));
