class TowersOfHanoi {
  constructor(n) {
    this.first = [];
    this.second = [];
    this.third = [];
    for (let i = n; i >= 1; i--) {
      this.first.push(i);
    }
  }

  move(start, mid, destination, depth) {
    if (depth === 0) {
      return;
    } else if (depth === 1) {
      destination.push(start.pop());
    } else {
      let currentDepth = depth;
      let shortTower;
      let placePiece;
      if (depth % 2 === 0) {
        shortTower = mid;
        placePiece = destination;
      } else {
        shortTower = destination;
        placePiece = mid;
      }
      let shortTowerDepth = 0;
      shortTower.push(start.pop());
      shortTowerDepth++;
      currentDepth--;
      while (currentDepth > 0) {
        placePiece.push(start.pop());
        currentDepth--;
        this.move(shortTower, start, placePiece, shortTowerDepth);
        shortTowerDepth++;
        [shortTower, placePiece] = [placePiece, shortTower];
      }
    }
  }
}

// Proofs

var towersOfHanoi = new TowersOfHanoi(5);
console.log(towersOfHanoi);
towersOfHanoi.move(
  towersOfHanoi.first,
  towersOfHanoi.second,
  towersOfHanoi.third,
  towersOfHanoi.first.length
);
console.log(towersOfHanoi);

var towersOfHanoi2 = new TowersOfHanoi(6);
console.log(towersOfHanoi2);
towersOfHanoi.move(
  towersOfHanoi2.first,
  towersOfHanoi2.second,
  towersOfHanoi2.third,
  towersOfHanoi2.first.length
);
console.log(towersOfHanoi2);
