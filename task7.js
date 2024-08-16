document.write(`<h1> Shopping Cart </h1><br/>`);
//prices of item 1 and item 2
var priceItem1 = 650;
var priceItem2 = 100;

//quantities of item 1 and item 2
var quantityItem1 = 3;
var quantityItem2 = 7;

//shipping charges
var shippingCharges = 100;

//total cost of item 1
var totalCostItem1 = priceItem1 * quantityItem1;

//total cost of item 2
var totalCostItem2 = priceItem2 * quantityItem2;

//subtotal
var subtotal = totalCostItem1 + totalCostItem2;

// Calculate the total cost including shipping charges
var totalCost = subtotal + shippingCharges;

// Display the receipt in the browser

document.write("Price of Item 1: " + priceItem1 + " PKR <br>");
document.write("Quantity of Item 1: " + quantityItem1 + " <br>");
document.write("Price of Item 2: " + priceItem2 + " PKR <br>");
document.write("Quantity of Item 2: " + quantityItem2 + " <br> ");

document.write("Shipping Charges: " + shippingCharges + " PKR <br> <br>");
document.write("Total Cost of your order is : " + totalCost + " PKR");