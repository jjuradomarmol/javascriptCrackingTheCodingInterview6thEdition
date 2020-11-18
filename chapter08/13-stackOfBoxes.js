let deposit = {};

function findStackables(boxes, baseBox) {
  let stackables = [];
  boxes.forEach((box) => {
    if (
      box.height < baseBox.height &&
      box.width < baseBox.width &&
      box.depth < baseBox.depth
    ) {
      stackables.push(box);
    }
  });
  return stackables;
}

function stackBoxes(boxes) {
  if (boxes === undefined) {
    return "we need boxes to stack!";
  }

  if (boxes.length === 0) {
    return 0;
  }
  boxes.sort();
  var key = JSON.stringify(boxes);
  if (deposit[key] === undefined) {
    var height = 0;
    boxes.forEach((box) => {
      var stackables = findStackables(boxes, box);
      var currentHeight = box.height + stackBoxes(stackables);
      height = Math.max(currentHeight, height);
    });
    deposit[key] = height;
  }
  return deposit[key];
}

// Proofs

console.log(stackBoxes() === "where are your boxes?");

const box1a = {
  width: 1,
  height: 1,
  depth: 1,
};
console.log(stackBoxes([box1a]) === 1);

const box1b = {
  width: 1,
  height: 100,
  depth: 1,
};
console.log(stackBoxes([box1b]) === 100);

const box1c = {
  width: 1,
  height: 1,
  depth: 1,
};
const box2c = {
  width: 2,
  height: 2,
  depth: 2,
};
console.log(stackBoxes([box1c, box2c]) === 3);

const box1d = {
  width: 1,
  height: 1,
  depth: 1,
};
const box2d = {
  width: 2,
  height: 2,
  depth: 2,
};
const box3d = {
  width: 3,
  height: 3,
  depth: 3,
};
console.log(stackBoxes([box1d, box2d, box3d]) === 6);

const box1e = {
  width: 1,
  height: 1,
  depth: 1,
};
const box2e = {
  width: 2,
  height: 2,
  depth: 2,
};
const box3e = {
  width: 3,
  height: 3,
  depth: 3,
};
console.log(stackBoxes([box2e, box3e, box1e]) === 6);

const box1f = {
  width: 3,
  height: 1,
  depth: 1,
};
const box2f = {
  width: 1,
  height: 3,
  depth: 1,
};
const box3f = {
  width: 1,
  height: 1,
  depth: 3,
};
console.log(stackBoxes([box1f, box2f, box3f]) === 3);
