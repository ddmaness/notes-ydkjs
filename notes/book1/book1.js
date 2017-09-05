//TODO book1 chapter1 practice exercise
const TAX_RATE = .08;

function calcTotalPrice(){
	var bankAccount = Number(prompt("how much money do you have?"));
	const phoneCost = Number(prompt("what is the phones price?"));
	const accCost = Number(prompt("what is the price of the accessory?"));
	var totalCost = 0;
	var phonesPurchased = 0;
	var accessoriesPurchased = 0;
	while (true){
		if (bankAccount > phoneCost){
			bankAccount -= phoneCost
			totalCost += phoneCost;
			phonesPurchased++
		}
		if (bankAccount > accCost){
			bankAccount -= phoneCost;
			totalCost += phoneCost;
			accessoriesPurchased++
		}
		if (backAccount < accCost){
			break;
		}
	}
	var costWithTax = totalCost + (totalCost * TAX_RATE);
	if (costWithTax < bankAccount){
		console.log("you can afford this purchase which costs $" + costWithTax.toFixed(2) + "!");
	}
	else {
		console.log("the tax made this unaffordable as the total cost was $" + costWithTax.toFixed(2))
	}
}