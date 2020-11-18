var deposit = {};

function coins(value, currentCoin) {
  if (currentCoin === undefined) {
    currentCoin = 1;
  }
  if (value < 0) {
    return 0;
  } else {
    let key = `${value}:${currentCoin}`;
    if (deposit[key] === undefined) {
      if (value === 0) {
        deposit[key] = 1;
      } else {
        let ways = 0;
        if (currentCoin <= 1) {
          ways += coins(value - 1, 1);
        }
        if (currentCoin <= 5) {
          ways += coins(value - 5, 5);
        }
        if (currentCoin <= 10) {
          ways += coins(value - 10, 10);
        }
        if (currentCoin <= 25) {
          ways += coins(value - 25, 25);
        }
        deposit[key] = ways;
      }
    }
    return deposit[key];
  }
}

// Proofs

console.log(coins(1) === 1);
console.log(coins(2) === 1);
console.log(coins(3) === 1);
console.log(coins(4) === 1);
console.log(coins(5) === 2);
console.log(coins(17) === 6);
console.log(coins(100) === 242);
