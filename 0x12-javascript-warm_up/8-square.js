#!/usr/bin/node
if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const e = Number(process.argv[2]);
  let q = 0;
  while (q < e) {
    console.log('X'.repeat(e));
    q++;
  }
}
