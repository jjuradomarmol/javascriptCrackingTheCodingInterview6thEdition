function zeroMatrix(theMatrix) {
  let rows = [],
    columns = [];
  for (let r = 0; r < theMatrix.length; r++) {
    for (let c = 0; c < theMatrix[r].length; c++) {
      if (theMatrix[r][c] === 0) {
        rows.push(r);
        columns.push(c);
      }
    }
  }
  rows.forEach((e, l) => {
    for (let i = 0; i < theMatrix.length; i++) {
      for (let j = 0; j < theMatrix[i].length; j++) {
        if (i === e) {
          theMatrix[i][j] = 0;
        }
      }
    }
  });
  columns.forEach((e, l) => {
    for (let i = 0; i < theMatrix.length; i++) {
      for (let j = 0; j < theMatrix[i].length; j++) {
        if (j === e) {
          theMatrix[i][j] = 0;
        }
      }
    }
  });
  return theMatrix;
}

var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

console.log(zeroMatrix(testMatrix));
