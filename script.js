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


function convertNumber(){
    let num = parseFloat(userInput.value); 

    let metersToFeet = (num * 3.280839895).toFixed(2);
    let feetToMeters = (num * 0.3048).toFixed(2);

    let litersToGallons = (num * 0.2641720524).toFixed(2);
    let gallonsToLitters = (num * 3.785411784).toFixed(2);

    let kilosToPounds = (num * 2.2046226218).toFixed(2);
    let poundsToKilos = (num * 0.45359237).toFixed(2);
    
    if(userInput.value.length !== 0){
        for(let number of inputNumbers){ 
            number.textContent = userInput.value;
        }

        document.getElementsByClassName("ft")[0].textContent = metersToFeet;
        document.getElementsByClassName("m")[0].textContent = feetToMeters;

        document.getElementsByClassName("gal")[0].textContent = litersToGallons;
        document.getElementsByClassName("l")[0].textContent = gallonsToLitters;

        document.getElementsByClassName("lbs")[0].textContent = kilosToPounds;
        document.getElementsByClassName("kg")[0].textContent = poundsToKilos;

    } else {
        for(let result of results){
            result.textContent = "0.00";
        }
        for(let number of inputNumbers){
            number.textContent = "0";
        }
    } 
}

userInput.addEventListener("input", convertNumber);
moonIcon.addEventListener("click", changeTheme);
sunIcon.addEventListener("click", changeTheme);