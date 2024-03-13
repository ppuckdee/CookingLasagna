document.addEventListener('DOMContentLoaded', (event) => {
    const EXPECTED_MINUTES_IN_OVEN = 40;
    const COOK_TIME_PER_LAYER = 2;

    // function to calculate remaining minutes in the oven
    function remainingMinutesInOven(actualMinutesInOven) {
        return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    }

    // function to calculate preparation time based on the number of layers
    function prepTimeInMinutes(numLayers) {
        return numLayers * COOK_TIME_PER_LAYER;
    }

    // function to calculate total working time in minutes
    function totalTimeInMinutes(numLayers, actualMinutesInOven){
        return prepTimeInMinutes(numLayers) + remainingMinutesInOven(actualMinutesInOven);
    }

    // function to handle calculations, now supports two inputs for total time calculation
    function calculateAndDisplayTime(inputElementId1, inputElementId2, resultElementId, calculationFunction) {
        const inputVal1 = document.getElementById(inputElementId1).value.trim();
        const numericInputVal1 = Number(inputVal1);

        let numericInputVal2 = 0;
        if (inputElementId2) {
            const inputVal2 = document.getElementById(inputElementId2).value.trim();
            numericInputVal2 = Number(inputVal2);
        }

        if (!isNaN(numericInputVal1) && numericInputVal1 !== "") {
            let time;
            if (inputElementId2) {
                time = calculationFunction(numericInputVal1, numericInputVal2);
            } else {
                time = calculationFunction(numericInputVal1);
            }
            document.getElementById(resultElementId).textContent = `Time: ${time} minutes.`;
        } else {
            document.getElementById(resultElementId).textContent = "Please enter a valid number.";
        }
    }

    // adding event listeners to buttons for different calculations
    document.getElementById('calculateButton').addEventListener('click', () => calculateAndDisplayTime('timeInput', null, 'result', remainingMinutesInOven));
    document.getElementById('calculateButton2').addEventListener('click', () => calculateAndDisplayTime('layerInput', null, 'result2', prepTimeInMinutes));
    document.getElementById('calculateButton3').addEventListener('click', () => calculateAndDisplayTime('layerInput', 'timeInput', 'result3', totalTimeInMinutes));
});
