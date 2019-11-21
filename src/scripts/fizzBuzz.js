// write a function to print numbers from 1 to N.
// if number is divisible by 3 print "Fizz"
// if number is divisible by 5 print "Buzz"
// if divisible by both 3 and 5 print "FizzBuzz"
(function fizzBuzz(N) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
})(20);
