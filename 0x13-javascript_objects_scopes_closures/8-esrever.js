#!/usr/bin/node
exports.esrever = function (list) {
  let lens = list.length - 1;
  let i = 0;
  while ((lens - i) > 0) {
    const aux = list[lens];
    list[lens] = list[i];
    list[i] = aux;
    i++;
    lens--;
  }
  return list;
};
