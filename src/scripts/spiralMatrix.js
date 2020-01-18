// input : N
// output:
//  a matrix of N x N with numbers inserted in a spiral order
// N = 3
// output:
// [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]

function matrix(N) {
  let result = [];
  let count = 1;
  let startCol = 0;
  let startRow = 0;
  let endCol = N - 1;
  let endRow = N - 1;

  for (let i = 0; i < N; i++) {
    result.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    // for top row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = count;
      count++;
    }
    startRow++;

    // for right column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = count;
      count++;
    }
    endCol--;

    // for bottom row
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = count;
      count++;
    }
    endRow--;

    // for left column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = count;
      count++;
    }
    startCol++;
  }

  console.table(result);
}

matrix(5);
