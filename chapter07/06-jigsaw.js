class JigsawPiece {
  constructor(row, col) {
    this._position = { row: row, col: col };
    this.name = Math.random().toString(36).substring(7);
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
  }
}

class JigsawPuzzle {
  constructor(dimensions) {
    this.jigsawGraph = this.genPieces(dimensions);
    this.dimensions = dimensions;
  }

  genPieces(dimensions) {
    let graph = {};
    let array = [];
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        array.push(new JigsawPiece(i, j));
      }
    }
    array.sort(() => (Math.random() < 0.5 ? 1 : -1));
    array.forEach((piece) => {
      graph[piece.name] = piece;
    });
    return graph;
  }

  match(piece1, piece2, direction) {
    if (piece1 === null || piece2 === null) {
      return false;
    } else if (direction === "up") {
      return (
        piece1._position.row === piece2._position.row + 1 &&
        piece1._position.col === piece2._position.col
      );
    } else if (direction === "down") {
      return (
        piece1._position.row === piece2._position.row - 1 &&
        piece1._position.col === piece2._position.col
      );
    } else if (direction === "left") {
      return (
        piece1._position.row === piece2._position.row &&
        piece1._position.col === piece2._position.col + 1
      );
    } else if (direction === "right") {
      return (
        piece1._position.row === piece2._position.row &&
        piece1._position.col === piece2._position.col - 1
      );
    } else {
      throw "error, no direction";
    }
  }

  checkPiece(piece) {
    if (piece._position.row === 0 && piece.up !== null) {
      return false;
    } else if (
      piece._position.row !== 0 &&
      !this.match(piece, piece.up, "up")
    ) {
      return false;
    }

    if (piece._position.row === this.dimensions - 1 && piece.down !== null) {
      return false;
    } else if (
      piece._position.row !== this.dimensions - 1 &&
      !this.match(piece, piece.down, "down")
    ) {
      return false;
    }

    if (piece._position.col === 0 && piece.left !== null) {
      return false;
    } else if (
      piece._position.col !== 0 &&
      !this.match(piece, piece.left, "left")
    ) {
      return false;
    }

    if (piece._position.col === this.dimensions - 1 && piece.right !== null) {
      return false;
    } else if (
      piece._position.col !== this.dimensions - 1 &&
      !this.match(piece, piece.right, "right")
    ) {
      return false;
    }

    return true;
  }

  checkDone() {
    for (let piece in this.jigsawGraph) {
      if (!this.checkPiece(this.jigsawGraph[piece])) {
        return false;
      }
    }
    return true;
  }

  fitPuzzle() {
    for (let piece1 in this.jigsawGraph) {
      for (let piece2 in this.jigsawGraph) {
        if (
          this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], "up")
        ) {
          this.jigsawGraph[piece1].up = this.jigsawGraph[piece2];
          this.jigsawGraph[piece2].down = this.jigsawGraph[piece1];
        } else if (
          this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], "down")
        ) {
          this.jigsawGraph[piece1].down = this.jigsawGraph[piece2];
          this.jigsawGraph[piece2].up = this.jigsawGraph[piece1];
        } else if (
          this.match(this.jigsawGraph[piece1], this.jigsawGraph[piece2], "left")
        ) {
          this.jigsawGraph[piece1].left = this.jigsawGraph[piece2];
          this.jigsawGraph[piece2].right = this.jigsawGraph[piece1];
        } else if (
          this.match(
            this.jigsawGraph[piece1],
            this.jigsawGraph[piece2],
            "right"
          )
        ) {
          this.jigsawGraph[piece1].right = this.jigsawGraph[piece2];
          this.jigsawGraph[piece2].left = this.jigsawGraph[piece1];
        }
      }
    }
  }
}

// Proofs

var jigsaw = new JigsawPuzzle(2);
console.log(jigsaw.jigsawGraph);

console.log(jigsaw.checkDone(), false);

jigsaw.fitPuzzle();
console.log(jigsaw.jigsawGraph);

console.log(jigsaw.checkDone(), true);
