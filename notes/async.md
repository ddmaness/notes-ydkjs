# Async and Performance

``` javascript

```

## Chapter 1: Asynchrony Now and Later
What is at the heart of asynchronous programming?


What will most likely be console.logged here and why?
``` javascript
// ajax(..) is some arbitrary Ajax function given by a library
var data = ajax( "http://some.url.1" );

console.log( data );
```
Why is it called a callback function?

Why can the setTimeout() function not guarantee that your code will be executed precisely when it says
it will?

What is the difference between the terms "async" and "parallel"?

What does it mean to state that JS has "run to completion" behavior?

What does the term "race condition" mean?

Define concurrency as it pertains to JS.

when is nondeterminism in async behavior acceptable?

what is wrong with this code and what is one way to fix it?
``` javascript
var res = [];

function response(data) {
	res.push( data );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
```


what is wrong with this code and what is one way to fix it?
``` javascript
var a, b;

function foo(x) {
	a = x * 2;
	baz();
}

function bar(y) {
	b = y * 2;
	baz();
}

function baz() {
	console.log(a + b);
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
```

what is a "latch" condition and how is it different from a "race" condition?

What is one method of avoiding hogging the event loop (and locking up the UI) while processing huge amounts of data

how is the es6 job queue different from the event loop?

Describe jobs and event loops in terms of an amusement park ride.

Describe to basic patterns for dealing with concurrency interaction

## Chapter 2: Callbacks

Define a "callback"

In what order will the following functions fire?
``` javascript
doA( function(){
	doB();

	doC( function(){
		doD();
	} )

	doE();
} );

doF();
```

Describe "inversion of controll" why is it a problem?

What does it mean to "not release zalgo"?

What are the two main problems with using callbacks for asynchronous code?

## Chapter 3: Promises

 




