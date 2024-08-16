document.write(`<h1> Mark Sheet </h1><br/>`);
// Store total marks and marks obtained by the student
var totalMarks = 980;
var marksObtained = 804;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");