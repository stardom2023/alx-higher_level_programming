#!/usr/bin/node
function factorial (w) {
  if (w < 0) {
    return (-1);
  }
  if (w === 0 || isNaN(w)) {
    return (1);
  }
  return (w * factorial(w - 1));
}

console.log(factorial(Number(process.argv[2])));
