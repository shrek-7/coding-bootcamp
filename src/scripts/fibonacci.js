// 0, 1, 1, 2, 3, 5, 8, 13......

// write a function to print the nth fibonacci number

function memoize(fn) {
  let cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    let result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

console.log(fib(6));
