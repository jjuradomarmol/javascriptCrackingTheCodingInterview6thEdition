class Minesweeper {
  constructor(N, B) {
    this.board = null;
    this.init(N, B);
  }

  init(N, B) {
    this.board = this.createBoard(N);
    this.insertBombs(B);
    this.computeCells();
    console.log("now let's start playing minesweeper!");
  }

  createBoard(N) {
    let board = [];
    for (let i = 0; i < N; i++) {
      board.push([]);
      for (let j = 0; j < N; j++) {
        board[i].push({ isBomb: false, reveal: false, display: null });
      }
    }
    return board;
  }

  insertBombs(B) {
    let count = 0;
    let n = this.board.length;
    let row;
    let col;
    while (count < B) {
      row = Math.floor(Math.random() * n);
      col = Math.floor(Math.random() * n);
      if (!this.board[row][col].isBomb) {
        this.board[row][col].isBomb = true;
        count++;
      }
    }
  }

  check(row, col) {
    if (this.board[row][col].isBomb) {
      console.log(`boom! ${row}, ${col} is a mine`);
      this._printBoard();
    } else {
      this.explore(row, col);
      console.log("not bad! now check your next spot");
      this.printBoard();
    }
  }

  explore(row, col) {
    if (
      this.board[row] !== undefined &&
      this.board[row][col] !== undefined &&
      !this.board[row][col].isBomb &&
      !this.board[row][col].reveal
    ) {
      this.board[row][col].reveal = true;
      if (this.board[row][col].display === 0) {
        this.explore(row - 1, col - 1);
        this.explore(row - 1, col);
        this.explore(row - 1, col + 1);
        this.explore(row, col - 1);
        this.explore(row, col + 1);
        this.explore(row + 1, col - 1);
        this.explore(row + 1, col);
        this.explore(row + 1, col + 1);
      }
    }
  }

  computeCells() {
    let n = this.board.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        this.computeCell(row, col, n);
      }
    }
  }

  computeCell(row, col, n) {
    if (this.board[row][col].isBomb) {
      this.board[row][col].display = "B";
      return;
    }
    let count = 0;

    if (row !== 0) {
      count += this.board[row - 1][col].isBomb ? 1 : 0;
    }

    if (row !== n - 1) {
      count += this.board[row + 1][col].isBomb ? 1 : 0;
    }

    if (col !== 0) {
      count += this.board[row][col - 1].isBomb ? 1 : 0;
    }

    if (col !== n - 1) {
      count += this.board[row][col + 1].isBomb ? 1 : 0;
    }

    if (col !== 0 && row !== 0) {
      count += this.board[row - 1][col - 1].isBomb ? 1 : 0;
    }

    if (row !== 0 && col !== n - 1) {
      count += this.board[row - 1][col + 1].isBomb ? 1 : 0;
    }

    if (row !== n - 1 && col !== 0) {
      count += this.board[row + 1][col - 1].isBomb ? 1 : 0;
    }

    if (row !== n - 1 && col !== n - 1) {
      count += this.board[row + 1][col + 1].isBomb ? 1 : 0;
    }

    this.board[row][col].display = count.toString();
  }

  printBoardRevealed() {
    let n = this.board.length;
    for (let i = 0; i < n; i++) {
      console.log(
        this.board[i]
          .map((cell) => {
            return cell.display;
          })
          .join("|")
      );
    }
  }

  printBoard() {
    let n = this.board.length;
    for (let i = 0; i < n; i++) {
      console.log(
        this.board[i]
          .map((cell) => {
            return cell.reveal ? cell.display : "x";
          })
          .join("|")
      );
    }
  }
}

// Proofs

var minesweeper = new Minesweeper(10, 20);
minesweeper.printBoard();
console.log(
  "you can play if you want! Below the board is revealed. Shhhh it's our secret! :) "
);
minesweeper.printBoardRevealed();
