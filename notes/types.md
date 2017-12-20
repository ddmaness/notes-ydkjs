# Notes on YDKJS Types and Grammar

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
```javascript
var example = "example"
```

## Chapter 1: Types

**What are the 7 built in types of JS and what operator allows you to check them?**

**What is the difference between an undefined and undeclared variable?**

**Which of the 7 types is buggy when combined with the typeof operator and why?**

**What are the two subtypes of objects?**

**What compound conditional check actually allows you to check for typeof null?**

**What are some advantages to having functions be a type of object?**

**typeof an undeclared variable in returns "undefined" how can this be used as an error safeguard?**


## Chapter 2: Values

**Define the term primative in reference to variables**

**Define the term scalar**

**What is a common "gotcha" when using delete on arrays?**

- its possible to add string keys to arrays, it's just not a great idea

**Name two array like values and describe how to convert them into true arrays**

**Why does negative zero exist in JS and how is it handled?**

**What new es6 only method catches special equalities like NaN and -0?**

**what operator allows you to create an undefined value where one did not exist?**

**What types are assigned by value and what types are assigned by reference?**

**How an you pass a scalar primitive as a reference?**


## Chapter 3: Natives

**What does it mean to be a "native" in JS?**

**What does it mean to be a "primative" in JS?**

**What is a boxing wrapper and why is it useful?**
 
**What are the object wrapper gotchas?**

**what method allows you to retrieve the underlying primative value of an object wrapper?** 

**what is the most reliable way to create an array of empty slots?**

**What two native constructors are actually helpful and which one is moderately helpful, Why for each?**

**What does the Error() constructor return when called?**

**New to es6, what is the Symbol native?**

**What is an actual use case pre es6 for the fact that native constructor prototypes are empty literals of that native Array.prototype is \[\] etc.?**

## Chapter 4: Coercion

**define type casting and coersion and the difference between the two phrases in js**

- coersion always results in scalar primatives and never complex values like objects.

**What will each of these return if called with a.toString()?**
```javascript
var a = 22;
var a = {
  key: "value"
};
var a = [a, b, c];
var a = null;
var a = false;
```
**What does JSON.stringify(..) do and what makes it different than toString()?**

**What does it mean for a value to be "JSON safe"?**

**What values are not "JSON safe"?**

**what does adding to toJSON method to an object do and what is its most common use case?**

**what is the optional second arguement to JSON.stringify() and for what is it used?**

**what is the third optional arguement to JSON.stringify() and for what is it used?**

**what do true false undefined and null become when coerced by ToNumber?**

**Why are 1 and 0 not truely the same as true and false in JS?**

**Name all falsey values in JS**

**What are falsey objects?**

**What is the most well know case of a falsey object?**

**What is the purpose of making conversion "explicit?**

**How do you convert a string to a number and vice versa explicity?**

**Why should you not add 'new' in front of the code to convert numbers to strings or vice versa?**

**What is the difference between using String(x) and x.toString() when coercing a value to a string?**

**What does the unary operator '+' do when placed before a string? What about '-'?**

**What is the most common use case for adding the unary operator '+' infront of a Date object?**

**What is the noncoercion (which is prefered) es5 method of getting a timestamp from the date object?**

**Describe the behavior of the ~ unary operator and its most common usage**

**Why is Math.floor(x) preferable to \~\~x when converting numbers to their interger form?**

**What is the difference between using Number(x) and parseInt(x) or parseFloat(x) to convert strings to numbers?**

**When would you use a parse function over Number() coercion?**

- never use parseInt with non string values

**What is the most common method for explicitly converting a value to a boolean?**

**What is the common use case for using !! explicit boolean conversion in the context of JSON.stringify?**

**What is the most common method to implicitly convert a number to a string?**

**What is the most common method to implicitly convert a string to a number? Why does it work?**

**What are the 5 types of expressions that force implicit boolean conversion?**

**What do these return?**
```javascript
var a = 42;
var b = "abc";
var c = null;

a || b;
a && b;

c || b;
c && b;
```
**What are two common patterns that utilize the fact that && and || return one of the values, not a boolean?**

**What is the gotcha when using loose equals "==" to compare a truthy value to a boolean?  Why does this occur?**

**Why should you never ever use "== true" or "== false"

**Evaluate whats right or wrong with each of these conditional checks**
```javascript
var a = "42";


if (a) {
	// ..
}

if (a == true) {
	// ..
}

if (Boolean( a )) {
	// ..
}

if (!!a) {
	// ..
}

if (a === true) {
	// ..
}
```

**Is it safe to compare null and undefined using loose equals? why or why not?**

**Why is it preferable to use loose equals when comparing null to undefined or vice versa?**

**What gets coerced when comparing a number or string to and object using loose equals.  how is it coerced?**

**avoiding using "== true" or "== false" avoids most unexpected conversion corner cases what are the others?**

**what boolean is returned? "0" == null;	**

**what boolean is returned? "0" == undefined;**

**what boolean is returned? "0" == false;**

**what boolean is returned?  "0" == NaN;**

**what boolean is returned? "0" == NaN;**

**what boolean is returned? "0" == ""**

**what boolean is returned? false == null;**

**what boolean is returned? false == undefined;**

**what boolean is returned? false == NaN;	**

**what boolean is returned? false == 0;**

**what boolean is returned? false == "";**

**what boolean is returned? false == [];**

**what boolean is returned? false == {};**

**what boolean is returned? "" == null;**

**what boolean is returned? "" == undefined;**

**what boolean is returned? "" == NaN;**

**what boolean is returned? "" == 0;**

**what boolean is returned? "" == [];**

**what boolean is returned? "" == {};**

**what boolean is returned? 0 == null;**

**what boolean is returned? 0 == undefined;**

**what boolean is returned? 0 == NaN;**

**what boolean is returned? 0 == [];**

**what boolean is returned? 0 == {};**

**what are the 7 gotcha coercions to look out for?**

**What are two heuristics that allow you to avoid almost any problem with == coercion?**

**Why may it be necessary to explicity coerce values before comparing with "<" "<=" ">=" ">"?

# Chapter 5: Grammar

**What is the difference between a statement and an expression?**

**What are declaration statements what are assignment expressions and what are expression statements?**

**What are the values of a and b in this code block and why?  How might I change this outcome?**
```javascript
var a = 42;
var b = a++;
```
**What is the statement-series comma operator and how is it used?**

**What are labels in JS and how are they useful to "continue" and "break" statements? - note that this practice is typically
discouraged**

**is there such a thing as and else if statement in JS?**

**What gets evaluated first && or ||?**

**Describe a common use case for "short-circuiting"  using && and || operators**

**What is the order of precedence for || ?: and &&?**

**What is associativity in reference to ? :, &&, and ||? Which are left associative and which are right associative?**

**What is the difference between compile time and runtime errors as they relate to try...catch statements?**







