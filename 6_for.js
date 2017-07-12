'use strict';

// Remember this?
let count = 1;

while (count <= 10) {
  console.log('Counting - ' + count);
  count = count + 1;
}


// There's another way to code a loop in JavaScript.
// This is the basic form of the _for_ statement

// for (initial-expression; condition; increment-expression) statement

// The expression, condition and inv=crement expressions can be arbitrarily complex!
// (But really, don't go there...)
// Most commonly, for-loops are used to traverse a range of numbers. The _while_ loop
// above could be written as follows:

for (let count1 = 1; count1 <= 10; count1 = count1 + 1) {
  console.log('Counting with a for loop - ' + count1)
}


// _for_ has a few other forms. In particular:

// for (const value of collection) statement

// This can be used for arrays and strings (and other things, in fact anything
// that is set up to be 'iterable' - more on this later

for (const element of [1,2,3,4,5]) {
  console.log(element * 2);
}

for (const character of 'Hello JavaScript!') {
  console.log(character.toUpperCase());
}


// ====================

// So, here's a small task. Given what you know about arrays, can you write the
// code to log each element of the following array to the console, in four
// different ways: using a while loop, using a for loop, using for .. of, and
// using the forEach method on the array itself.

let thursday = ['This', 'must', 'be', 'Thursday'];


// while




// for



// for ... of




// forEach



// ====================






