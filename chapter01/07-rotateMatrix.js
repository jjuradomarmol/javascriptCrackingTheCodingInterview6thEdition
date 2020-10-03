var matrix = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]];

function rotateMatrix(matrix) {
  return matrix.map((row, i) =>
    row.map((val, j) => matrix[matrix.length - 1 - j][i])
  );
}

console.log(rotateMatrix(matrix));
