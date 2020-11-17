function numWays(N) {
  let answer = 0;
  function recurse(number) {
    if (number === 0) {
      answer++;
    } else if (number > 0) {
      recurse(number - 1);
      recurse(number - 2);
      recurse(number - 3);
    }
  }
  recurse(N);
  return answer;
}

// Proofs

console.log(numWays(1), 1);
console.log(numWays(3), 4);
console.log(numWays(7), 44);
