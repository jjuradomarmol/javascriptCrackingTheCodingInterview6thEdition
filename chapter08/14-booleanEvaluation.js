let deposit = {};

function countEval(booleans, result) {
  if (booleans === undefined) {
    return "we need the boolean!";
  } else if (booleans.length % 2 === 0) {
    return "your expression is a little strange. you sure it's right?";
  } else if (booleans.length === 1) {
    if (eval(booleans) === result) {
      return 1;
    } else {
      return 0;
    }
  } else {
    const key = `${booleans}:${result}`;
    if (deposit[key] === undefined) {
      let count = 0;
      let left;
      let right;
      for (let i = 1; i < booleans.length; i = i + 2) {
        left = booleans.slice(0, i);
        right = booleans.slice(i + 1);
        if (eval("0" + booleans[i] + "0") === result) {
          count += countEval(left, 0) * countEval(right, 0);
        }

        if (eval("0" + booleans[i] + "1") === result) {
          count += countEval(left, 0) * countEval(right, 1);
        }

        if (eval("1" + booleans[i] + "0") === result) {
          count += countEval(left, 1) * countEval(right, 0);
        }

        if (eval("1" + booleans[i] + "1") === result) {
          count += countEval(left, 1) * countEval(right, 1);
        }
      }
      deposit[key] = count;
    }
    return deposit[key];
  }
}

// Proofs

console.log(countEval("0", 0) === 1);
console.log(countEval("0", 1) === 0);
console.log(countEval("1", 1) === 1);
console.log(countEval("1", 0) === 0);
console.log(countEval("1|1", 0) === 0);
console.log(countEval("1^0|0|1", 0) === 2);
console.log(countEval("0&0&0&1^1|0", 1) === 10);
