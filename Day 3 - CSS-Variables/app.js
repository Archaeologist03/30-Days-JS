//DOM Selection
const spacing = document.querySelector(`input[name="spacing"]`);
const blur = document.querySelector(`input[name="blur"]`);
const color = document.querySelector(`input[name="base"]`);



// Events Callback Functions

// Callback function for spacing css var event
function spacingChange() {
    document.documentElement.style.setProperty(`--spacing`, `${spacing.value}px`);
}

// Callback function for blur css var event
const blurChange = () => { 
    document.documentElement.style.setProperty(`--blur`, `${blur.value}px`);
}

// Callback function for color css var event
const colorChange = () => document.documentElement.style.setProperty(`--base`, `${color.value}`);


// EVENTS

// Changing spacing css variable value on input event
spacing.addEventListener("input", spacingChange);
// Changing blur css variable value on input event
blur.addEventListener("input", blurChange);
// Changing color value of css variable
color.addEventListener("input", colorChange);











// Getting/Accesing css variables 
// const spacingVar = window.getComputedStyle(document.documentElement).getPropertyValue(`--spacing`);