#!/usr/bin/node
function add (m, n) {
  const o = m + n;
  console.log(o);
}

add(Number(process.argv[2]), Number(process.argv[3]));
