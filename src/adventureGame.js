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
let weaponDamage = 0;
let monsterDefense = 5;
let healingPotionValue = 30;

console.log("=============================");
console.log("      The Dragons Quest      ")
console.log("=============================");

playerName = Readline.question("Enter your name: ");
console.log(`Welcome, ${playerName}!`);
console.log("Your gold is: " + playerGold);
console.log("Weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");
console.log("Monster defense power: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");