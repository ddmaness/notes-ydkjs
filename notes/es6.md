# YDKJS ES6 & Beyond

## Chapter 1: ES? Now & Future

Can you explain how closures are a direct result of lexical scope and functions as values?

Can you recite the four simple rules for how this is bound?

Ever heard of objects linked to other objects (OLOO)?

Have you been muddling through fake "classes" in JS instead of adopting the simpler "behavior delegation" design pattern?

What is the difference between a shim/polyfill and transpiling?

What is the point of the outer if statment in this code snippet?
```
if (!Object.is) {
	Object.is = function(v1, v2) {
		// test for `-0`
		if (v1 === 0 && v2 === 0) {
			return 1 / v1 === 1 / v2;
		}
		// test for `NaN`
		if (v1 !== v1) {
			return v2 !== v2;
		}
		// everything else
		return v1 === v2;
	};
}
```
going forward it is likely that browsers will start rolling out support for features continually so what
two steps should you get in the habit of doing now?

## Chapter 2: Syntax

Always place let declared variables at the =========== of the block in which they are declared because unlike
var =======================

What of the advantage of declaring the iterator variable of for loops with let instead of var?

Const restricts the ================== not the value itself

What's wrong with this block of code?
```javascript
{
	const a = [1,2,3];
	a.push( 4 );
	console.log( a );

	a = 42;
}
```
Don rely on cont for code behavior, instead think of it as signaling =============

What does TDZ stand for and what idea does it convey?

What is the most typical use cas for using the spread operator (...) in front of arrays?

Pre es6 how could you spread the elements of an array for use as arguments?

In addition to spreading the ... operator can be used to ================.

What will be console.logged in each of these calls and why?
```javascript
function foo(x = 11, y = 31) {
	console.log( x + y );
}

foo();
foo( 5, 6 );
foo( 0, 42 );

foo( 5 );
foo( 5, undefined );
foo( 5, null );

foo( undefined, 6 );
foo( null, 6 );	
```

Describe es6 destructuring and how it is used.

What will be console.logged here in es6?
```javascript
function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}

var { x: bam, y: baz, z: bap } = bar();
console.log( bam, baz, bap);

console.log( x, y, z );

var { x = 5, y = 10, z = 15, w = 20 } = bar();
console.log( x, y, z );

var { x, y, z, w: WW = 20 } = bar();
console.log( x, y, z, WW );
```

How could the following be rewritten using es6 syntax's concise properties?
```javascript
var x = 2, y = 3,
	o = {
		x: x,
		y: y
	};
```

How could the following be rewritten using es6 syntax's concise methods? What other ability does this open up?
```javascript
var o = {
	x: function(){
		// ..
	},
	y: function(){
		// ..
	}
}
```

Only use concise methods if you don't need ================== or =====================.

What are es6 computed property names and how do you use them?

What is a super in es6 and how is it used?

Why is inerpoliliterals a better name for es6 template literals?

how do you use template literals in es6? what are they?

What are tagged template literals in es6 and how are they used-

when using tagged template literals how can you access the un-modified string?

How would you express this as an es6 arrow function?
```javascript
function foo(x,y) {
	return x + y;
}
```

leaving off the curly braces in an es6 arrow function with one expression means you can omit=============.

curly braces are required in es6 arrow functions if ================.

arrow functions are always Anonymous function ================ never ====================.

Arrow functions are most appropriate for ===================== functions.

How is `this` bound differently in arrow functions?

What rules determine if arrow functions are appropriate or not?

What were the reasons arrow functions were created?

What is the difference between the `for in` loop of es6's `for of` loops?

What values in JS are considered to be 'iterable'?

what does the `u` flag in es6 regular expressions do? what gotcha does this avoid?

What does the `y` flag do in es6 regular expressions? what method must it be paired with?

What is the most likely practical scenario for using the `y` flag for es6 regular expressions?

what new es6 property allows you to retrieve the flags appended to a regular expression? what about the regexp
statement itself?

What is the trick for switching numbers to their binary, octal, or hexadecimal forms or really any
different base number system?  How about switching them back?

you should probably avoid ```toUpperCase(), toLowerCase(), substring(..), indexOf(..), slice(..)``` when 
working with strings that contain =========================.

What are es6 symbols and how are they used? What is their point?

what special behaviors do symbols as object properties exhibit?

## Chapter 3: Oganization

What is the return value of es6 iterators?

What will be returned in each of these .next() calls?
```javascript
var arr = [1,2,3];

var it = arr[Symbol.iterator]();

it.next();
it.next();
it.next();

it.next();
```

What happens if you call next() on an iterator that's already completed?

What is the difference between calling return() on an iterator vs. next()?

What is the difference between when throw() is called on a generator vs. return() or next()?

By convention an iterator should not produce any more results after being called with =============.

How and why would you make an iterator an iterable?

is is possible to use a generator as a concise method on an object?

How do you execute a generator?  What is different about when you execute a generator vs.
executing a normal function

Why would you put a generator inside of a loop?

yield statements have the same precence as ==================.

Which of these expressions are valid?
```javascript
var a, b;

a = 3;					
b = 2 + a = 3;			
b = 2 + (a = 3);		

yield 3;			
a = 2 + yield 3;		
a = 2 + (yield 3);		
```

describe yield delegation and how it is used?

what will be console.logged in this code?
```javascript
function *foo() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

function *bar() {
	var x = yield *foo();
	console.log( "x:", x );
}

for (var v of bar()) {
	console.log( v );
}
```

What values will be returned in this code snippet?
```javascript
function *foo(x) {
	if (x < 3) {
		x = yield *foo( x + 1 );
	}
	return x * 2;
}

var it = foo( 1 );
it.next();
```
```for of loops``` can be used to consume ==============.

What is returned in each of these ```next()``` calls. Why?
```javascript
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();				

it.return( 42 );	

it.next();	
```

How do you set the behavior for a generator to be executed if the controlling code is no longer being
iterated over?

Why should you not put a ```yield``` statement inside of a ```finally``` clause?

Error handling with generators can be expressed with ================= which works in both the inbound
and outbound directions even though ```yeild *``` delegation.

What are the two major patterns for which generators are useful?

Describe the module pattern prior to es6.

Describe the singleton pattern and give an example.

What are some major differences between es6 modules and the module pattern of the past?

Why can you not put an ```import``` or ```export``` statement inside of a conditional to cut down on file
size?

what are the two ways to express an ```export```

there is no ================== scope in modules.

How to you export a module with an alias?

When a module is imported it is imported as a pointer meaning that...

What the difference in behavior when importing these two exports? what is the implication?
```javascript
function foo(..) {
	// ..
}

export default foo;
```
And this one:
```javascript
function foo(..) {
	// ..
}

export { foo as default };
```

values of exported modules are ======== at the time of export/import.

what is the module specifier in import statements?

When do you need or not need curly braces in your import statement?

Why should you only import the needed modules from an exported api?

How would you import everything from a module into a single namespace?

true or false it is possible to reassign imported bindings?

es6 modules are intended to be (static or dynamic).

unlike object methods class methods are ==================.

What is the meaning of enumerablein a JS context?

there are no ======= separating the members in a class body

what are the three main differences between ```class Foo()``` and ```function Foo()```?

what does ```super``` do in the context of JS es6 classes?

extending natives safely can be done for the first time using es6 ================.

What is ```new.target``` used for in es6?

What is the ```static``` keyword used for in es6


