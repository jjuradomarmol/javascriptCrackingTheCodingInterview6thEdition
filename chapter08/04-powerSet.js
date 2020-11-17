function powerSet(set) {
  let subsets = [];
  function recurse(currentSet, remainingSet) {
    subsets.push(currentSet);
    for (var i = 0; i < remainingSet.length; i++) {
      recurse(currentSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  }
  recurse([], set);
  return subsets;
}

// Proofs

console.log(powerSet([1, 2, 3, 4]));
