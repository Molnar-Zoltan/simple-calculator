const displayText = document.getElementById("displayText");
const textMaxLength = 12; // Max character length of the display
const errorText = "ERROR";
const operations = ["+", "-", "*", "/"];


function clearDisplay() {
    displayText.value = "0"; 
}

function addToDisplay(button) {

    if ((displayText.value.length == 1 && displayText.value == "0" && button.textContent != "." 
        && !operations.includes(button.textContent)) || displayText.value == errorText) { 
        displayText.value = button.textContent; 
    }
    else {
        if (displayText.value.length + 1 <= textMaxLength) {
            displayText.value += button.textContent; // Adds the character to the display if the text length doesn't exceed the max character number
        }
    }

}

function deleteCharacter() {
    
    if (displayText.value.length > 1) { 
        displayText.value = displayText.value.slice(0, -1); // It removes the last character of the string if the text length is higher than 1, otherwise it sets the text to 0 (with the clearDisplay() method)
    }
    else {
        clearDisplay();
    }


}

function getResult() {

    try {
        let result = math.evaluate(displayText.value);
        displayText.value = Number.isInteger(result) ? result : result.toFixed(3); // Checks if the result is a whole number. If not, the result will be displayed with the .toFixed(3) method
    }
    catch(error) {
        displayText.value = errorText;
        console.error(error);
    }

}