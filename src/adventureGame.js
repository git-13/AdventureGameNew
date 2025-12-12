console.log("Welcome to the Adventure Game!");
// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const Readline = require("readline-sync");
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
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

let firstVisit = true;

if (currentLocation === "village"){
    console.log("=== VILLAGE ===");
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    console.log("Where would you like to go?");
    console.log("1: Go to blacksmith");
    console.log("2: Go to market");
    console.log("3: Enter forest");
    console.log("4: Check status");
    console.log("5: Quit game");

    if(firstVisit === true){
        console.log("Villager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
        }
    }else if(currentLocation ==="blacksmith"){
        console.log("\n=== BLACKSMITH ===");
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhere would you like to go?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Quit game");
    }

let choice = Readline.question("\n Enter choice (number): ");
let choiceNum = parseInt(choice);

if (currentLocation === "village"){
    if (choiceNum === 1){
        currentLocation = "blacksmith"
        console.log("\nYou enter the blacksmith's shop.");
    }else if(choiceNum === 2){
        console.log("\nMarket: Merchants call out their wares.");
    }else if(choiceNum === 3){
        console.log("\nForest: A dark path leads into the forest. Strange noises echo from within.")
    }else if(choiceNum === 4){
        //Show status
        console.log("\n===" + playerName + "'s Status: ===");
        console.log("Health: " + playerHealth);
        console.log("Gold: " + playerGold);
        console.log("Location: " + currentLocation);
    }else if(choiceNum === 5){
        console.log("\nGoodbye, brave adventurer!");
    }else{
        console.log("\nInvalid choice! Please enter a number between 1 and 5.");
    }

}else if(currentLocation === "blacksmith"){
    if(choiceNum === 1){
        currentLocation = "village";
        console.log("\nYou return to the village center.");
    }else if(choiceNum === 2){
        //Show status
        console.log("\n===" + playerName + "'s Status: ===");
        console.log("Health: " + playerHealth);
        console.log("Gold: " + playerGold);
        console.log("Location: " + currentLocation);
    }else if(choiceNum === 3){
        console.log("\nGoodbye, brave adventurer!");
    }else{
        console.log("\nInvalid choice! Please enter a number between 1 and 3.");
    }
}