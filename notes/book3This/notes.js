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

---What 4 things happen when a function is called with "new" in front of it?

---
*/