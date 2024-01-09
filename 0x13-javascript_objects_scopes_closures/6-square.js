#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (t) {
    if (t === undefined) {
      t = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let d = '';
      for (let j = 0; j < this.width; j++) {
        d += t;
      }
      console.log(d);
    }
  }
}

module.exports = Square;
