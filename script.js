const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();//Using const, create a variable named day and assign it the day of the month from date with the .getDate() method.
const month = date.getMonth() + 1;//Using const, create a variable named month and assign it the month from date with the .getMonth() method.Remember to add 1 to the number returned by .getMonth().
const year = date.getFullYear();//Using const, create a variable named year and assign it the year from date with the .getFullYear() method.
const hours = date.getHours();//Create a const variable named hours and assign it the hour from date with the .getHours() method.
const minutes = date.getMinutes();//Create a const variable named minutes and assign it the minutes from date with the .getMinutes() method.

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
//Use the textContent property on currentDateParagraph to set its text content to the value of the formattedDate variable.
currentDateParagraph.textContent = formattedDate;
//In JavaScript, the change event is used to detect when the value of an HTML element has changed:Attach the addEventListener method to the dateOptionsSelectElement. The first argument of the event listener should be the string change and the second argument should be an empty arrow function.
dateOptionsSelectElement.addEventListener("change", () => {
    //A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.Create a switch statement and use dateOptionsSelectElement.value as the expression.
    switch (dateOptionsSelectElement.value) {
        //Add a case where the value is yyyy-mm-dd. Inside the case, set the text content of currentDateParagraph to the value of formattedDate.
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
            //Split formattedDate into an array of substrings with the .split() method and use a "-" as the separator.
            formattedDate.split("-").reverse()//The .reverse() method is used to reverse an array in place.Chain the .reverse() method to the end of .split() method.

            //Use the .join() method to join the reversed array elements into a string and use a "-" for the separator.
            .join("-");
            break;//The break statement will tell the JavaScript interpreter to stop executing statements. Without adding a break statement at the end of each case block, the program will execute the code for all matching cases:

        //Add another case with the value mm-dd-yyyy-h-mm. Inside that case, set the text content of currentDateParagraph to empty template literals.
        case "mm-dd-yyyy-h-mm":
            //Inside the case for mm-dd-yyyy-h-mm, set the textContent property of currentDateParagraph to ${month}-${day}-${year} ${hours} Hours ${minutes} Minutes.
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;//Also, make sure to include a break statement to terminate the switch statement.

        //In a switch statement, the default case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases.For the default case, set the text content of currentDateParagraph to the value of formattedDate.
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});