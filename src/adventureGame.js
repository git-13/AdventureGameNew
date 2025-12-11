console.log("Welcome to the Adventure Game!");
// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const Readline = require("readline-sync");
let playerName = "";
let playerHeath = 100;
let playerGold = 20;
let playerLocation = "village";
let gameRunning = true;
let inventory = [];

playerName = Readline.question("Enter your name: ");
console.log(`Welcome, ${playerName}!`);
console.log("Your gold is: " + playerGold);