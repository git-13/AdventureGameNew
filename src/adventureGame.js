const readline = require("readline-sync");
console.log("Welcome to the Adventure Game!");
// Add a welcome message
console.log("Prepare yourself for an epic journey!");


let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];
let weaponDamage = 0;
let monsterDefense = 5;
let healingPotionValue = 30;
let firstVisit = true;
let hasWeapon = false;
let hasPotion = false;
let hasArmor = false;


function showStatus(){
            console.log("\n===" + playerName + "'s Status: ===");
            console.log("Health: " + playerHealth);
            console.log("Gold: " + playerGold);
            console.log("Location: " + currentLocation);
}

function showLocation(){
    console.log("\n ===" + currentLocation.toUpperCase() + "===");
     if (currentLocation === "village"){
        console.log("=== VILLAGE ===");
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("Where would you like to go?");
        console.log("1: Go to blacksmith");
        console.log("2: Go to market");
        console.log("3: Enter forest");
        console.log("4: Check status");
        console.log("5: Check inventory");
        console.log("6: Quit game");

        if(firstVisit === true){
            console.log("Villager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
            }
        }else if(currentLocation === "blacksmith"){
            console.log("\n=== BLACKSMITH ===");
            console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
            
            console.log("\nWhat would you like to do?");
            console.log("1: Return to village");
            console.log("2: Check status");
            console.log("3: Check inventory");
            console.log("4: Quit game");
        }else if(currentLocation === "market"){
            console.log("\n=== MARKET ===");
            console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
            
            console.log("\nWhat would you like to do?");
            console.log("1: Return to village");
            console.log("2: Check status");
            console.log("3: Check inventory");
            console.log("4: Quit game");
        }
}

function checkInventory(){
         for(let slot=1; slot <= 3; slot ++){
                console.log("Checking item slot " + slot + "...");
                if (slot === 1 && hasWeapon){
                    console.log("Found: Sword");
                }else if(slot === 2 && hasPotion){
                    console.log("Found: Health Potion");
                }else if(slot === 3 && hasArmor){
                    console.log("Found: Shield");
                }else{
                    console.log("Empty slot");
                }
            }
}

function move(choiceNum) {
    let validMove = false;
    
    if (currentLocation === "village") {
        if (choiceNum === 1) {
            currentLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
            validMove = true;
        }
        else if (choiceNum === 2) {
            currentLocation = "market";
            console.log("\nYou enter the market.");
            validMove = true;
        }
        else if (choiceNum === 3) {
            currentLocation = "forest";
            console.log("\nYou venture into the forest...");
            validMove = true;
        }
    }
    else if (currentLocation === "blacksmith" || currentLocation === "market") {
        if (choiceNum === 1) {
            currentLocation = "village";
            console.log("\nYou return to the village center.");
            validMove = true;
        }
    }
    
    return validMove;
}

function handleCombat() {
   if (hasWeapon) {
       console.log("You have a sword! You attack!");
       console.log("Victory! You found 10 gold!");
       playerGold += 10;
       return true;
   } else {
       console.log("Without a weapon, you must retreat!");
       updateHealth(-20);
       return false;
   }
}

function updateHealth(amount) {
   playerHealth += amount;
   
   if (playerHealth > 100) {
       playerHealth = 100;
       console.log("You're at full health!");
   }
   if (playerHealth < 0) {
       playerHealth = 0;
       console.log("You're gravely wounded!");
   }
   
   console.log("Health is now: " + playerHealth);
   return playerHealth;
}

function checkInventory() {
   console.log("\n=== INVENTORY ===");
   if (!hasWeapon && !hasPotion && !hasArmor) {
       console.log("Your inventory is empty!");
       return;
   }
   
   if (hasWeapon) console.log("- Sword");
   if (hasPotion) console.log("- Health Potion");
   if (hasArmor) console.log("- Shield");
}

console.log("=============================");
console.log("      The Dragons Quest      ")
console.log("=============================");

playerName = readline.question("Enter your name: ");
console.log(`Welcome, ${playerName}!`);
console.log("Your gold is: " + playerGold);
console.log("Weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");
console.log("Monster defense power: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");



//Main game loop
while (gameRunning) {
    // Show current state
    showLocation();
    showStatus();
    
    // Get and validate player choice
    let validChoice = false;
    while (!validChoice) {
        try {
            let choice = readline.question("\nEnter choice (number): ");
            
            // Check for empty input
            if (choice.trim() === "") {
                throw "Please enter a number!";
            }
            
            // Convert to number and check if it's a valid number
            let choiceNum = parseInt(choice);
            if (isNaN(choiceNum)) {
                throw "That's not a number! Please enter a number.";
            }
            
            // Handle choices based on location
            if (currentLocation === "village") {
                if (choiceNum < 1 || choiceNum > 6) {
                    throw "Please enter a number between 1 and 6.";
                }
                
                validChoice = true;
                
                if (choiceNum <= 3) {
                    if (!move(choiceNum)) {
                        console.log("\nYou can't go there!");
                    }else if (choiceNum === 3) {
                       console.log("\nA monster appears!");
                       if (!handleCombat()) {
                           currentLocation = "village";
                       }
                   }
                }
                else if (choiceNum === 4) {
                    showStatus();
                }
                else if (choiceNum === 5) {
                    checkInventory();
                }
                else if (choiceNum === 6) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            else if (currentLocation === "blacksmith" || currentLocation === "market") {
                if (choiceNum < 1 || choiceNum > 4) {
                    throw "Please enter a number between 1 and 4.";
                }
                
                validChoice = true;
                
                if (choiceNum === 1) {
                    if (!move(choiceNum)) {
                        console.log("\nYou can't go there!");
                    }
                }
                else if (choiceNum === 2) {
                    showStatus();
                }
                else if (choiceNum === 3) {
                    checkInventory();
                }
                else if (choiceNum === 4) {
                    gameRunning = false;
                    console.log("\nThanks for playing!");
                }
            }
            
        } catch (error) {
            console.log("\nError: " + error);
            console.log("Please try again!");
        }
    }

    // Check if player died
    if (playerHealth <= 0) {
        console.log("\nGame Over! Your health reached 0!");
        gameRunning = false;
    }
}

console.log("\nGame has ended.");

// --- commedted not used parf of FOREST location and battle logic
        // ------------------------------------------
        // else if(currentLocation === "forest"){
        //     console.log("\n=== FOREST ===");
        //     console.log("A dark forest surrounds you. You hear strange noises...");

        //     // Simple battle when entering forest
        //     let inBattle = true;
        //     let monsterHealth = 3;
        //     console.log("\n Battle started");
        //     while(inBattle){
        //         console.log("Monster health: " + monsterHealth);
        //         console.log("You attack!");
        //         monsterHealth--;
        //         if(monsterHealth <= 0){
        //             console.log("Monster defeated!");
        //             inBattle = false;
        //         }
        //     }
        //     currentLocation = "village";  // Return to village after battle
        //     console.log("\nYou return to the safety of the village.");
        // }