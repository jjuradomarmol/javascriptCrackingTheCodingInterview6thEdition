function groupAnagrams(anagrams) {
  let anagramsSorted = [],
    anagram1,
    anagram2;

  for (let i = 0; i < anagrams.length; i++) {
    anagramsSorted.push(anagrams[i]);
    anagram1 = anagrams[i].toString().toLowerCase().split("").sort().join();
    for (let j = i + 1; j < anagrams.length; j++) {
      anagram2 = anagrams[j].toString().toLowerCase().split("").sort().join();
      if (anagram1 == anagram2) {
        anagramsSorted.push(anagrams[j]);
        anagrams.splice(j, 1);
        j--;
      }
    }
  }
  return anagramsSorted;
}

const anagramsArray = [
  "abcd",
  "California",
  "Barcelona",
  "Cdba",
  "London",
  "bcad",
];

console.log(groupAnagrams(anagramsArray));
