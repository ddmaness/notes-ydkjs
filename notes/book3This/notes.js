/*

--- Why is the keyword this helpful?
It allows you to bind a function based on the location and context of when the function was called


---Why does this binding have nothing to do with lexical scope?
binding is determined by the call-site of the function whereas lexical scope is determined by the
declaration of the function.

---What is the difference between call stack and call site?
the call stack is the order in which function calls happened. the call site is the next to last function
in the call stack or failing this it is the global object.

---What is the easiest and least error prone way to determine the call stack and call site of a function?
using debugger to determine both

---What are the four rules for binding that must be considered when examining the callsite for this?
1.  if the function call is bare as in foo() the callsite is the global variable. ({default binding}}
2.  if not the callsite may be determined by determining call just prior to the function call containing
    this in the callstack.  this is called implicit binding. {{implicit binding}}
3.  call or apply can be used to explicitly bind this.  the bind keyword can be used for hard binding
    {{explicit binding}}
4.  If a function is called preceeded by the "new" keyword, an object is created and this object is 
    the binding site for the "this" calls in the function called with "new". {{new binding}}

---What is the order of presidence for these rules for new binding when more than one would apply?
new overrules explicit, which overrules implicit, which overules, default.

---What 4 things happen when a function is called with "new" in front of it?
1. a new object is created
2. this object inherits its prototype from its constructor
3. this is bound to this new object
4. unless the function returns its own alternate object, the new -invoked function call will automatically
return the newly constructed object 

---What is hard binding?
prevents a this binding from being lost or overwritten by frameworks

---What questions should you ask yourself (in order) to determine the binding site of this based on their
    order of precedence?
1. Is 'this' bound as the result of a 'new' function call?
2. Is 'this' explicitly bound?
3. Is 'this' implicitly bound?
4. this is either undefined or bound to the global object (default) depending upon strict mode settings


---What are the exceptions to the rules for binding?
If null is passed as the explicit binding location for this, the default rule applies.
If you indirectly reference a function the default rule applies
example: 
*/
function foo() {
	console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); // 3
(p.foo = o.foo)(); // 2

/*
What are the two forms of objects and what is the difference?
    literal and constructor.  Almost always going to use literal but constructor allows for 
    more customizability 

Is everything an object in javascript?  Why does this misconception exist?
    no Objects are one of 6 or 7 types.  However, some confusion occurs because literals of
    these types share their name with Objects that hold methods that can manipulate these 
    types.  ('string' vs. 'String' as in 'String.toString(9.5)')

What is Object.assign used for in ES6?
    to create a "shallow copy" of an object that has the same properties and values;

What three property descriptors are present on all object properties and what do they mean?
    enumberable (can it be iterated over) configurable (can these descriptors be changed?)
    and writable(can the value of this property be changed?)

How do you create and object that may not be changed?
    calling methods of the Object.Prototype such as 'freeze' or 'seal' depending upon the
    desired result.  the property discriptors can be changed directly as well

What are Getters and Setters?
    Getters are a way to override the default ways that values are retrieved from object
    properties.  And setters override default ways of setting defaults for object properties.

What is the difference between 'in' and 'hasOwnProperty'?
    in will look for property in the prototypes of the object and hasOwnProperty checks to see
    if the object directly has the property. 

What is the difference between 'for...' and 'for... in...' loops?
    for is best used for arrays. for in is best used for objects

What is the difference between forEach, 'every', and 'some'
    every and some have break cases. forEach runs through the entire array.

What is special about a 'for of' loop?
    iterates using either default @@iterator or one defined by you if more control is necessary.

Describe the concept of prototypes in JS.
    links which [[get]] will follow if it does not find a property on an object

Why should references to .constructor be avoided in code?    
    they may or may not point to the "constructor" of the object

To be safe you should treat the [[prototype]] of an object as a --
    READ ONLY CHARACTERISTIC

What is the difference between creating an object using Object.create() vs. new?
    new partially mimics class constructor calls with Object.create() simply creates a prototype
    link.

What is OLOO and what are it's advantages?
    Objects Linked to Other Objects.  Simpler code that is just as powerful that does not depend
    upon the idea that JS has classes (it doesn't)

Appendix Note: introduction of class keyword only obfuscates problem.
*/