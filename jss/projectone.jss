//Main text on site:
document.getElementById("projecttwo").textContent = "Main Project";
document.getElementById("projecttwotext").textContent = "A number that will increase or decrease depending on what you click";
document.getElementById("textcontentthree").textContent = "This is a random number generator";

// My variables for the different projects:
const decreaseButton = document.getElementById("decreese");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");
const countLabel = document.getElementById("CountLabel");
const minRandom = 0;
const maxRandom = 100;

// Initialize the count variable to 0
let count = 0;

// Add an event listener to the decrease button that decrements the count and updates the count label
decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
};

// Add an event listener to the reset button that resets the count to 0 and updates the count label
resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};

// Add an event listener to the increase button that increments the count and updates the count label
increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
};

// Add an event listener to the random button that generates a random number between minRandom and maxRandom and updates the random number text
random.onclick = function() {
    let randomNum = Math.floor(Math.random() * maxRandom);
    RandomNumberText.textContent = randomNum;
}