#!/usr/bin/node
exports.callMeMoby = function (y, theFunction) {
  for (let a = 0; a < y; a++) {
    theFunction();
  }
};
