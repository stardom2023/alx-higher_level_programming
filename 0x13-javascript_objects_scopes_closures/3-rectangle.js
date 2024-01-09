#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let d = '';
      for (let j = 0; j < this.width; j++) {
        d += 'X';
      }
      console.log(d);
    }
  }
}

module.exports = Rectangle;
