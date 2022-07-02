const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");
const userInput = document.getElementById("userInput");
const inputNumbers = document.getElementsByClassName("inputNumber");
const results = document.getElementsByClassName("result");
const viewportWidth = document.documentElement.clientWidth;

/* Toggle between light and dark theme */
function changeTheme() {
    let links = document.getElementsByTagName("link"); 
    let styleLink = links[links.length - 1];
    if(styleLink.href.includes("lightThemeStyle")){
        styleLink.href = "darkThemeStyle.css";
    } else {
        styleLink.href = "lightThemeStyle.css"
    }
}

function saveUserInput(){
    let value = userInput.value;
    
    if(value.length !== 0){
        for(let number of inputNumbers){ 
            number.textContent = value;
        }
        convertValues(value);
    } else {
        for(let result of results){
            result.textContent = "0.00";
        }
        for(let number of inputNumbers){
            number.textContent = "0";
        }
    }

} 

function convertValues(input) {
    let num = parseFloat(input);
    
    let metersToFeet = (num * 3.280839895).toFixed(2);
    document.getElementsByClassName("ft")[0].textContent = metersToFeet;
    let feetToMeters = (num * 0.3048).toFixed(2);
    document.getElementsByClassName("m")[0].textContent = feetToMeters;


    let litersToGallons = (num * 0.2641720524).toFixed(2);
    document.getElementsByClassName("gal")[0].textContent = litersToGallons;
    let gallonsToLitters = (num * 3.785411784).toFixed(2);
    document.getElementsByClassName("l")[0].textContent = gallonsToLitters;


    let kilosToPounds = (num * 2.2046226218).toFixed(2);
    document.getElementsByClassName("lbs")[0].textContent = kilosToPounds;
    let poundsToKilos = (num * 0.45359237).toFixed(2);
    document.getElementsByClassName("kg")[0].textContent = poundsToKilos;
}


userInput.addEventListener("input", saveUserInput);
moonIcon.addEventListener("click", changeTheme);
sunIcon.addEventListener("click", changeTheme);