document.write("<h1> Currency in PRK </h1>");
// amounts and exchange rates  
var usAmount = 10;
var sauAmount = 25;  
var dollarToPkrRate = 104.80; 
var riyalToPkrRate = 28; 

// total in Pakistani Rupees
var totalPkr = (usAmount * dollarToPkrRate) + (sauAmount * riyalToPkrRate);  

// Output the result  
document.write(`Total in Pakistani Rupees: ${totalPkr}`);