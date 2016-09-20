"use strict";

const even = number => number % 2 === 0;

const multiplyerByPosition = position => even(position) ? 1 : 3;

const completeChecksum = isbn =>
  isbn
    .split("")
    .map(Number)
    .filter(d => !isNaN(d))
    .reduce((sum, d, i) => sum + multiplyerByPosition(i) * d, 0);

let checksumDigit = isbn => 10 - completeChecksum(isbn) % 10;

console.log(checksumDigit("4567"));

console.log(checksumDigit("978151705411"));

console.log(checksumDigit("978-3-86680-192"));
