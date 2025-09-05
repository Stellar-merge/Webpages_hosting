const myTemp = document.getElementById("myTemp");
const mySubmit = document.getElementById("mySubmit");
const myRes = document.getElementById("myRes");
const myForm = document.getElementById("myForm");
const myRadio_C_F = document.getElementById("myRadio_C_F");
const myRadio_F_C = document.getElementById("myRadio_F_C");

let c = 0, f = 0;

myForm.onsubmit = function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Get the value only when the button is clicked
    const tempValue = parseFloat(myTemp.value);

    // Check if the input is a valid number
    if (isNaN(tempValue) && myTemp.value !== '') {
        myRes.textContent = "Invalid";
        return; // Stop the function
    } else if (myTemp.value === '') {
        myRes.textContent = "0.00";
        return;
    }

    if (myRadio_C_F.checked) {
        c = tempValue;
        f = (c * 9/5) + 32;
        myRes.textContent = f.toFixed(2) + " °F"; // Added unit for clarity
    } else if (myRadio_F_C.checked) {
        f = tempValue;
        c = (f - 32) * 5/9;
        myRes.textContent = c.toFixed(2) + " °C"; // Added unit for clarity
    }
};

// Optional: Clear result when changing conversion type for better UX
myRadio_C_F.onchange = function() {
    myRes.textContent = "0.00";
};

myRadio_F_C.onchange = function() {
    myRes.textContent = "0.00";
};