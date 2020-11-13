function drawLine(screen, width, x1, x2, y) {
  var byte;
  var pixel;

  function findByte(x, y, width) {
    var start = (y * width) / 8;
    return start + Math.floor(x / 8);
  }

  function findPixel(x) {
    return x % 8;
  }

  for (var i = x1; i <= x2; i++) {
    byte = findByte(i, y, width);
    pixel = findPixel(i);
    screen[byte][pixel] = 1;
  }
  return screen;
}

// Proofs

var testScreen = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
drawLine(testScreen, 16, 4, 12, 1);
console.log(testScreen);
