document.addEventListener('DOMContentLoaded', (event) => {
    
    const EXPECTED_MINUTES_IN_OVEN = 40;

    // Function to calculate remaining minutes in the oven
    function remainingMinutesInOven(actualMinutesInOven) {
        return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    }

    // Function to handle the calculation and display the result
    // .trim removes whitespaces from both sides of string
    // function isNaN(number: number): boolean 
    //Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
    function calculateAndDisplayRemainingTime() {
        
        //retrieves the current value entered into the HTML input element with the id timeInput and stores it in the variable inputVal.
        var inputVal = document.getElementById('timeInput').value; 
        
        // checks if inputVal is a number and 
        //if the input, after removing any spaces from the start and end, is not an empty string
        if (!isNaN(inputVal) && inputVal.trim() !== "") { 

            // calculates the remaining minutes in the oven using inputVal and stores the result in remainingMinutes.
            var remainingMinutes = remainingMinutesInOven(inputVal); 

            document.getElementById('result').textContent = "Remaining time in oven: " + remainingMinutes + " minutes.";
        
        } else {
            document.getElementById('result').textContent = "Please enter a valid number of minutes.";
        }
    }
    
    // Adding event listener to the button
    document.getElementById('calculateButton').addEventListener('click', calculateAndDisplayRemainingTime);
});