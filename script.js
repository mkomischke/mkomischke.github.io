/* home page: swapping images */
// initialize my buttons and add event listeners
document.addEventListener("DOMContentLoaded", () => {
    let leftButton = document.getElementById("left-button");
    let middleButton = document.getElementById("middle-button");
    let rightButton = document.getElementById("right-button");

    leftButton.addEventListener("click", () => swapPhoto(leftButton));
    middleButton.addEventListener("click", () => swapPhoto(middleButton));
    rightButton.addEventListener("click", () => swapPhoto(rightButton));
});

// get the photo currently being displayed
let mainDisplay = document.getElementById("display");

// function to swap the desired/clicked img with the one currently being displayed
function swapPhoto(button){
    // get the img inside the button
    let clickedImg = button.querySelector("img");

    // swap src, srcset, and sizes attributes of the main display with that of the clicked img
    let tempSrc = mainDisplay.src;
    let tempSrcset = mainDisplay.srcset;
    let tempSizes = mainDisplay.sizes;

    mainDisplay.src = clickedImg.src;
    mainDisplay.srcset = clickedImg.srcset;
    mainDisplay.sizes = clickedImg.sizes;

    clickedImg.src = tempSrc;
    clickedImg.srcset = tempSrcset;
    clickedImg.sizes = tempSizes;
}

/* blog page: greeting that changes depending on the time of day */
document.addEventListener("DOMContentLoaded", () => {

    // get the current hour
    let hour = new Date().getHours();

    // initialize variable to hold the greeting
    let greeting;

    // DOM query to access where I want to change the HTML
    let paragraph = document.getElementById("greeting");

    // conditionals
    if (hour >= 18){
        greeting = "good evening!";
    } else if (hour >= 12){
        greeting = "good afternoon!";
    } else if (hour >= 4){
        greeting = "good morning!";
    } else {
        greeting = "hello!";
    }

    // update text content
    paragraph.textContent = greeting;

    /* blog page: display the current day and time */
    // DOM queries to access my html elements
    let currentDay = document.getElementById("day");
    let currentTime = document.getElementById("time");

    // get the current date and time (e.g. Wed Dec 11 2024 00:05:51 GMT-0500 (Eastern Standard Time))
    let now = new Date();
    console.log(now.getDay())

    // formatting
    let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    // now.getDay() returns day of the week as a number 0-6
    // then, use indexing to get the day as a string
    let dayOfWeek = daysOfWeek[now.getDay()]; 

    // formatting the time to "h:mm am/pm"
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // if true, amPm is set to pm. if false, amPM is set to am
    let amPm = hours >= 12 ? "pm" : "am";

    // convert 24-hour time to 12-hour time
    hours = hours % 12 || 12; 

    // pad minutes with a leading zero if less than 10
    minutes = minutes.toString().padStart(2, "0");

    let formattedTime = `${hours}:${minutes}${amPm}`;

    // update text content
    currentDay.textContent = dayOfWeek;
    currentTime.textContent = formattedTime;
})