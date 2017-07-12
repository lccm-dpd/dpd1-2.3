// Instructions as before, different file name (obviously...)

// $ node src/2_statements.js

'use strict';

// Look up 'use strict'. Why do we use it? Why wouldn't you?

// ===================

// A program is a series of statements.
// Statements are terminated with ";".
// Here are some amazing facts about statements...

// All values and expressions are statements, when terminated

[];
2 + 3;
'hello ' + 'world';
4 === 2 + 2;
2 === 1 + 1 ? 'Maths is OK' : 'Maths is broken!';

// These don't appear to do anything, nevertheless they're still valid statements

// Function and method calls are expressions, and become statements when followed
// with a semicolon. We'll be using console.log a lot:

console.log('Yes, I\'m a statement');

// There are other kinds of statements, which use special words and constructs in the language
// We've across "const" and "let" already. Statements with "const" and "let" declare names which
// can then be used

const sum = 2 + 3;
console.log('2 + 3 (still) = ' + sum);

const squared = sum * sum;
console.log('Squaring it gives us ' + squared);

let i = 0;
i = i + 5;
console.log()

// You can write an empty statement...

;  // nothing to see here
;
;
;  // these are not the statements you are looking for

// You can write several statements on one line...
console.log(1); console.log(2); console.log(3);
// ... but it's considered bad style. Why, do you think?

// You can omit the ";" -- in most cases -- at the end of a line which contains only only statement:
console.log('please')
console.log('do')
console.log('not')
console.log('do')
console.log('this...')
// JavaScript here is inferring the missing semicolons, and acting as if
// you had actually typed them

// People argue about this, but most people considered it bad style. Why, do you think?


// Write a few statements below using console.log to display the text
// 
// It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
// During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.
// Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....


console.log("It is a period of civil war.");





// ====================






