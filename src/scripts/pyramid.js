// input:
// n =3

// output:

// '  #  '
// ' ### '
// '#####'

function pyramid(n) {
  let mid = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let step = "";
    for (let col = 0; col < 2 * n - 2; col++) {
      if (col >= mid - row && col <= mid + row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

// alternate recursive solutions to follow

pyramid(5);
