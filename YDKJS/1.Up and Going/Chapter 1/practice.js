/**
 * Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
 */

 const TAX_RATE = 1.0875;
 const PHONE_PRICE = 849.99, ACCESSORY_PRICE = 29.99, BANK_BALANCE = Number(prompt("Enter your bank account balance"));
 const SPENDING_THRESHOLD = BANK_BALANCE - 500;
 let total = 0;

function calculate_cost(tax, phone, accessory){
    return (phone + accessory) * tax;
}
function formatPrice(val){
    return "$"+String(val.toFixed(2));
}

 while(SPENDING_THRESHOLD > total){
     console.log("I will add a phone and accessory to my items. I might want another.")
     total += calculate_cost(TAX_RATE, PHONE_PRICE, ACCESSORY_PRICE);
     console.log("Current total is: ", formatPrice(total));
 }

 if(total > BANK_BALANCE){
     console.log("Sorry, you do not have enough funds.");
 }else{
     console.log("Congratulations on your purchase!");
 }