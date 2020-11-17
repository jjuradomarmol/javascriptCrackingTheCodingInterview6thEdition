function findPaths(grid) {
  let paths = [];
  let endRow = grid.length - 1;
  let endColumn = grid[0].length - 1;
  function recurse(row, column, currentPath) {
    if (row === endRow && column === endColumn) {
      paths.push(currentPath.concat([[row, column]]));
    } else if (row <= endRow && column <= endColumn) {
      if (row < endRow && grid[row + 1][column] !== "x") {
        recurse(row + 1, column, currentPath.concat([[row, column]]));
      }
      if (column < endColumn && grid[row][column + 1] !== "x") {
        recurse(row, column + 1, currentPath.concat([[row, column]]));
      }
    }
  }
  recurse(0, 0, []);
  return paths;
}

// Proofs

var grid = [
  ["0", "0", "0", "0"],
  ["0", "x", "0", "x"],
  ["x", "0", "0", "0"],
];

console.log(findPaths(grid));
