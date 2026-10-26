let subTotal=Number(prompt("Enter the sub total:"));
let tipPercentage=Number(prompt("Enter the Tip Percentage:"));
let calculatedTip=(tipPercentage/100)*subTotal;
let Total=calculatedTip+subTotal;

console.log(`Subtotal: $${subTotal}`)
console.log(`Tip Percentage: ${tipPercentage}%`)
console.log(`Calculated Tip: $${calculatedTip}`)
console.log(`Total Amount to Pay: $${Total}`);