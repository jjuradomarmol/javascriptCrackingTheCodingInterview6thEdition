function peaksAndValleys(theArray) {
  let arraySorted = [...theArray].sort((a, b) => a - b);
  let theArrayCopy = theArray.map((x) => x);
  let arrayReversed = theArrayCopy.sort().reverse();

  let mid = Math.ceil(theArray.length / 2);
  let array1 = arrayReversed.slice(0, mid);
  let array2 = arraySorted.slice(0, mid - 1);

  let arrayPeaksAndValleys = [];
  for (let i = 0; i < array1.length - 1; i++) {
    arrayPeaksAndValleys.push(array1[i]);
    arrayPeaksAndValleys.push(array2[i]);
  }
  if (array1.length != array2.length) {
    arrayPeaksAndValleys.push(array1[array1.length - 1]);
  }
  return arrayPeaksAndValleys;
}

// Proofs

let myArray = [5, 3, 1, 2, 3];
peaksAndValleys(myArray);
