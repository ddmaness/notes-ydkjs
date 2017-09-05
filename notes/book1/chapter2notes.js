//typeof returns the type of a value as a string "boolean" as opposed to boolean

//typeof null returns "object" this is a bug that will likely never be fixed

//falsy values
""
''
0
-0
NaN
null
undefined
false

//all other values are truthy

// == checks for equality with coercion allowed === coersion is not allowed
// === does not actually compare types and values
// overview of rules for coersion http://www.ecma-international.org/ecma-262/5.1/

//simple rules for using === vs ==
// - if either side could be the true or false value, avoid == and use ===
// - if either side could be the values (0, '', or []) avoid == and use ===
// - if you can't be certain of the values that will be compared, use ===
// - all other cases are safe for ==, and often improves readablility

//for inequalities if a string is comp with another string it is done like a dictionary "lexigraphically"
//if a string is compared with a number the string is coerced into a number if possible, if not it returns false because a number is being
	//compared to NaN

//the value on the left is the one that is coerced in checks for equality or inequality

//ES6 the let key word allows for the block scoping of variables for example, in if and while blocks

//should use strict mode for all code and can be called this way
 "use strict";
 //to affect all of the program or this way
 function foo(){
 	"use strict";
 }
 	//to apply to a single function in the program

//polyfiling is native code that hopes to emulate function in browsers that would normally not support it..
// should be very careful about implementing polyfill code written by yourself
// first check resources to see if it already exists (https://github.com/es-shims/es5-shim)  (https://github.com/es-shims/es6-shim).

//transpilers allow you to write in the most up to date syntax as they convert it to syntax that can be read by legacy browsers I should use them
//--- Babel (https://babeljs.io) (formerly 6to5): Transpiles ES6+ into ES5  
//--- Traceur (https://github.com/google/traceur-compiler): Transpiles ES6, ES7, and beyond into ES5