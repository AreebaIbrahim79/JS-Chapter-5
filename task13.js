// Store the details
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalYears = maxAge - currentAge;

// Calculate the total amount needed
var totalAmount = amountPerDay  * totalYears;

// Display the result

document.write("<h1>The Lifetime Supply Calculator </h1>");
document.write("Favorite snack : " + favoriteSnack + "</br>");
document.write(" Current Age : " + currentAge + "</br>");
document.write(" Estimated Maximum Age : " + maxAge + "</br>");
document.write(" Amount of snacks per day : " + amountPerDay + "</br>");
document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
