function findTheHeavyPill(theArray) {
  let pillBag = 0;
  let count = 0;
  for (let i = 0; i < theArray.length; i++) {
    pillBag += theArray[i] * (i + 1);
    count += i + 1;
  }
  let bottle = Math.round((pillBag - count) * 10);
  return `The heavy pill is in bottle number ${bottle}`;
}

// Proofs

findTheHeavyPill([1, 1, 1.1, 1, 1, 1, 1]);
