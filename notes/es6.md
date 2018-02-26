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
``` javascript
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
```
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



