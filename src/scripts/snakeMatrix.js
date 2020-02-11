/**
 * Write a function to accept an integer N and create a matrix size N*N
 * enter the elements in matrix in a snake order.
 *
 * input: 3
 * output
 * [[7, 8 ,9 ]
 *  [6, 5, 4]
 *  [1, 2, 3]]
 *
 */

function snakeMatrix(n) {
  let matrix = [],
    r = n - 1,
    c = 0,
    count = 0,
    i = 1;

  for (let i = 0; i < n; i++) {
    matrix[i] = Array.from({ length: n }, (v, i) => "");
  }

  while (i <= n) {
    if (i % 2 !== 0) {
      r = n - i;
      c = 0;
    } else {
      c = r;
      r--;
    }
    // fill the row from left to right
    if (c === 0) {
      for (let j = c; j <= n - 1; j++) {
        matrix[r][j] = count++;
      }
    } else {
      // fill the row from right to left
      for (let j = n - 1; j >= 0; j--) {
        matrix[r][j] = count++;
      }
    }
    i++;
  }
  console.table(matrix);
}

snakeMatrix(5);
