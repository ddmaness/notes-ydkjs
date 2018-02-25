# YDKJS ES6 & Beyond

## Chapter 1: ES? Now & Future

Can you explain how closures are a direct result of lexical scope and functions as values?

Can you recite the four simple rules for how this is bound?

Ever heard of objects linked to other objects (OLOO)?

Have you been muddling through fake "classes" in JS instead of adopting the simpler "behavior delegation" design pattern?

What is the difference between a shim/polyfill and transpiling?

What is the point of the outer if statment in this code snippet?
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

