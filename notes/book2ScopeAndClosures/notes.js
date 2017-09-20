/* 
---what is scope?
a set of rules that lets you predict how variables will be looked up when the program
runs.

---is js a compiled or interpreted language, what is the difference?
it is a compiled language.  Interpreted languages (like python) are run through
intermediate programs (interpreters) that allow them to give commands to the 
computer.  compiled languages give computers directions directly after compilation.

---referencing compiler, engine and scope what are the two steps for variable assignment?
first the compiler looks up the variable in the current scope and all scopes above it,
assigning it to the global scope if not found.  then the engine references scope to find
the variable and assigns a value to it.


---Find the three LHS lookups and 4 RHS lookups in this code.*/
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );
/*
lhs
var c =
var b =
a =

rhs
=a
=foo(2)
a+
b+

---what is lexical scope?
the scope is determined when writing the code.  not dynamically as the code is run.


---a helpful way of visualizing lexical scopes is as __________________.
a collection of bubbles within bubbles.


---what is "shadowing" and why does it not spit an error?
the same variable name can be used in an inner scope(shadowing) w/o error because
scope stops looking for the variable once it is found.


---what are the two methods for cheating lexical scope and why are they frowned upon?
eval() and with.  Both make code run slower and should not be used.

---what is the difference between function and block scoping?
function scoping is the most common type of scoping in js.  let and const
allow for easier block scoping in arbitrary {} blocks.


---why is hiding variables and functions by "wrapping" them in function calls a useful technique?
it hides the variables from outside influence (intentional or not).
it prevents unintended collision as the scope becomes less littered with variable names.

---write an example of how to simulataneously call and execute a function 
(an IIFE "Immediately invoked function-expression").*/
(function doSomething(thing){
    console.log(thing);
})();

/*
---what are the 3 drawbacks to calling a function expression anonymously?
1. can't call itself for recursion.
2. makes debugging difficult as the function cannot be named by the debugger.
3. makes code less ledgable as the name can be used to imply what the function does.


---Why is it a good idea to always name function expressions?
to avoid all of the above pitfalls.  also, there's no down side as their name does not 
persist in the scope.

---give and example of explicit block scoping to avoid confusion using the let keyword.
*/
if (true) {
    {
        let a = 3
    }
}


/*
---what is hoisting and why is let an exception?
the egg (declaration) comes before the chicken (assignment) during compilation. declarations
are hoisted to the top of the scope.  assignments are left in place. functions are hoisted first
then variables.
variables declared with the let keyword are not hoisted


---why should you avoid declaring functions in blocks?
the hoisting behavior of these functions can be unpredictable and may change with future
implementations of javascript.


---what is garbage collection and why is it relevant to the let keyword?
the opening up for use of memory once it is no longer in used.  placing memory in its
own block scope using let is one way to let the computer know that the data attached to that
variable will not be used again once the block is executed


---describe the concept of closures.
*/