function checkRotation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  return (string2 + string2).includes(string1);
}

console.log(checkRotation("waterbottle", "erbottlewat"), true);
console.log(checkRotation("waterbottle", "erbotlewatt"), false);
console.log(checkRotation("aaata", "aataa"), true);
