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

* its possible to add string keys to arrays, it's just not a great idea

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
