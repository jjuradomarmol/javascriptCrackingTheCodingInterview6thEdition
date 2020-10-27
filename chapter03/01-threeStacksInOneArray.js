class ThreeStacksInOneArray {
  constructor(value) {
    this.container = [];
    this.middleBottom = 0;
    this.middleTop = 0;
  }
}

ThreeStacksInOneArray.prototype.pushArray1 = function (value) {
  this.container.splice(this.middleBottom, 0, value);
  this.middleBottom++;
  this.middleTop++;
};

ThreeStacksInOneArray.prototype.pushArray2 = function (value) {
  this.container.splice(this.middleTop, 0, value);
  this.middleTop++;
};

ThreeStacksInOneArray.prototype.pushArray3 = function (value) {
  this.container.push(value);
};

ThreeStacksInOneArray.prototype.popArray1 = function () {
  if (this.isEmptyArray1()) {
    return undefined;
  }
  var answer = this.container[this.middleBottom - 1];
  this.container.splice(this.middleBottom - 1, 1);
  this.middleBottom--;
  this.middleTop--;
  return answer;
};

ThreeStacksInOneArray.prototype.popArray2 = function () {
  if (this.isEmptyArray2()) {
    return undefined;
  }

  var answer = this.container[this.middleTop - 1];
  this.container.splice(this.middleTop - 1, 1);
  if (this.middleBottom < this.middleTop) {
    this.middleTop--;
  }
  return answer;
};

ThreeStacksInOneArray.prototype.popArray3 = function (value) {
  if (this.isEmptyArray3()) {
    return undefined;
  }

  return this.container.pop(value);
};

ThreeStacksInOneArray.prototype.peekArray1 = function () {
  return this.isEmptyArray1()
    ? undefined
    : this.container[this.middleBottom - 1];
};

ThreeStacksInOneArray.prototype.peekArray2 = function () {
  return this.isEmptyArray2() ? undefined : this.container[this.middleTop - 1];
};

ThreeStacksInOneArray.prototype.peekArray3 = function () {
  return this.isEmptyArray3()
    ? undefined
    : this.container[this.container.length - 1];
};

ThreeStacksInOneArray.prototype.isEmptyArray1 = function () {
  return this.middleBottom === 0;
};

ThreeStacksInOneArray.prototype.isEmptyArray2 = function () {
  return this.middleBottom === this.middleTop;
};

ThreeStacksInOneArray.prototype.isEmptyArray3 = function () {
  return this.middleTop === this.container.length;
};


// Proofs

var t = new ThreeStacksInOneArray();
t.pushArray1("1a");
t.pushArray1("1b");
t.pushArray1("1c");
t.pushArray2("2a");
t.pushArray2("2b");
t.pushArray2("2c");
t.pushArray3("3a");
t.pushArray3("3b");
t.pushArray3("3c");

var a1 = t.popArray1();
var a2 = t.popArray2();
var a3 = t.popArray3();

var peekArray1 = t.peekArray1();
var peekArray2 = t.peekArray2();
var peekArray3 = t.peekArray3();

var b1 = t.popArray1();
var b2 = t.popArray2();
var b3 = t.popArray3();

var isEmptya1 = t.isEmptyArray1();
var isEmptya2 = t.isEmptyArray2();
var isEmptya3 = t.isEmptyArray3();

var c1 = t.popArray1();
var c2 = t.popArray2();
var c3 = t.popArray3();

var d1 = t.popArray1();
var d2 = t.popArray2();
var d3 = t.popArray3();

var isEmptyb1 = t.isEmptyArray1();
var isEmptyb2 = t.isEmptyArray2();
var isEmptyb3 = t.isEmptyArray3();

console.log(t.container, t.middleBottom, t.middleTop);
console.log(a1, a2, a3);
console.log(peekArray1, peekArray2, peekArray3);
console.log(b1, b2, b3);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(c1, c2, c3);
console.log(d1, d2, d3);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);
