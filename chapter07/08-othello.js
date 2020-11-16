class OthelloPiece {
  constructor(color) {
    this.side = color;
  }

  flip() {
    if (this.side === "white") {
      this.side = "black";
    } else {
      this.side = "white";
    }
  }
}

class OthelloBoard {
  constructor(N = 8) {
    if (N % 2 !== 0) {
      throw "error, board must be of even length";
    }
    this.N = N;
    this.board = this.genBoard(N);
    this.board[N / 2 - 1][N / 2 - 1] = new OthelloPiece("white");
    this.board[N / 2][N / 2] = new OthelloPiece("white");
    this.board[N / 2 - 1][N / 2] = new OthelloPiece("black");
    this.board[N / 2][N / 2 - 1] = new OthelloPiece("black");
  }

  genBoard(N) {
    var board = [];
    for (var i = 0; i < N; i++) {
      var row = [];
      for (var j = 0; j < N; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  logBoard() {
    for (var i = 0; i < this.N; i++) {
      console.log(
        this.board[i].map((piece) => {
          return piece !== null ? piece.side : null;
        })
      );
    }
  }

  placePiece(color, row, col) {
    if (this.board[row][col] === null) {
      console.log("piece already exists in that place");
    } else if (!this.legalMove(color, row, col)) {
      console.log("this is not a legal move");
    } else {
      this.board[row][col] = new OthelloPiece(color);
      this.flipPieces(color, row, col);
    }
  }

  canFlip(color, row, col, direction) {
    var directionPos = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
      upLeft: [-1, -1],
      upRight: [-1, 1],
      downLeft: [1, -1],
      downRight: [1, 1],
    };

    var flipColor = {
      white: "black",
      black: "white",
    };

    var movement = directionPos[direction];
    var currentRow = row + movement[0];
    var currentCol = col + movement[1];
    if (
      currentRow === this.N ||
      currentCol === this.N ||
      currentRow === -1 ||
      currentCol === -1
    ) {
      return false;
    }
    if (
      this.board[currentRow][currentCol] === null ||
      this.board[currentRow][currentCol].side === color
    ) {
      return false;
    }
    while (
      this.board[currentRow][currentCol] !== null &&
      this.board[currentRow][currentCol].side === flipColor[color]
    ) {
      currentRow = currentRow + movement[0];
      currentCol = currentCol + movement[1];
    }
    return (
      this.board[currentRow][currentCol] !== null &&
      this.board[currentRow][currentCol].side === color
    );
  }

  PiecesToFlip(color, row, col) {
    return (
      this.canFlip(color, row, col, "up") ||
      this.canFlip(color, row, col, "down") ||
      this.canFlip(color, row, col, "left") ||
      this.canFlip(color, row, col, "right") ||
      this.canFlip(color, row, col, "upLeft") ||
      this.canFlip(color, row, col, "upRight") ||
      this.canFlip(color, row, col, "downLeft") ||
      this.canFlip(color, row, col, "downRight")
    );
  }

  legalMove(color, row, col) {
    console.log("checking legal move");
    if (this.board[row][col] !== null) {
      console.log(`${row}, ${col} is already taken up.`);
      return false;
    } else if (!this.PiecesToFlip(color, row, col)) {
      console.log(`${row}, ${col} - no pieces for ${color} to flip`);
      return false;
    } else {
      return true;
    }
  }

  flipPiece(color, row, col, direction) {
    var directionPos = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
      upLeft: [-1, -1],
      upRight: [-1, 1],
      downLeft: [1, -1],
      downRight: [1, 1],
    };

    var flipColor = {
      white: "black",
      black: "white",
    };

    var movement = directionPos[direction];
    var currentRow = row + movement[0];
    var currentCol = col + movement[1];
    while (this.board[currentRow][currentCol].side === flipColor[color]) {
      this.board[currentRow][currentCol].side = color;
      currentRow = row + movement[0];
      currentCol = col + movement[1];
    }
  }

  flipPieces(color, row, col) {
    if (this.canFlip(color, row, col, "up")) {
      this.flipPiece(color, row, col, "up");
    }

    if (this.canFlip(color, row, col, "down")) {
      this.flipPiece(color, row, col, "down");
    }

    if (this.canFlip(color, row, col, "left")) {
      this.flipPiece(color, row, col, "left");
    }

    if (this.canFlip(color, row, col, "right")) {
      this.flipPiece(color, row, col, "right");
    }

    if (this.canFlip(color, row, col, "upLeft")) {
      this.flipPiece(color, row, col, "upLeft");
    }

    if (this.canFlip(color, row, col, "upRight")) {
      this.flipPiece(color, row, col, "upRight");
    }

    if (this.canFlip(color, row, col, "downLeft")) {
      this.flipPiece(color, row, col, "downLeft");
    }

    if (this.canFlip(color, row, col, "downRight")) {
      this.flipPiece(color, row, col, "downRight");
    }
  }

  placePiece(color, row, col) {
    if (!this.legalMove(color, row, col)) {
      console.log("this move is not legal");
    } else {
      console.log("placing piece");
      this.board[row][col] = new OthelloPiece(color);
      this.flipPieces(color, row, col);
    }
  }

  checkScore() {
    var score = {
      black: 0,
      white: 0,
    };

    for (var i = 0; i < this.N; i++) {
      for (var j = 0; j < this.N; j++) {
        if (this.board[i][j] !== null) {
          score[this.board[i][j].side]++;
        }
      }
    }
    console.log(
      `the current score is: black ${score.black}, white ${score.white}`
    );
  }
}

// Proofs

var ob = new OthelloBoard();
ob.logBoard();
ob.checkScore();
ob.placePiece("black", 2, 3);
ob.logBoard();
ob.placePiece("white", 5, 5);
ob.placePiece("white", 4, 2);
ob.logBoard();
ob.placePiece("black", 7, 7);
ob.placePiece("black", 5, 5);
ob.logBoard();
