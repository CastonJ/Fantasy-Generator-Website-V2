//
//
//
//
// Line 100 is the potion javaScript to choose types of potions
















// Testing Dice Roller

function RollDice6() {
    var diceRoll6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceRoll6").innerHTML = diceRoll6;
}

function RollDice12() {
    var diceRoll12 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("diceRoll12").innerHTML = diceRoll12;
}




// These functions is for the side navigation bar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function mouseoverSideNav() {
    document.getElementById("sideNavSpan").style.color = "blue";
}

function mouseoutSideNav() {
    document.getElementById("sideNavSpan").style.color = "black";
}

// These functions is for the side navigation bar END



// This function is used to randomize status conditions
function GetCondition(){
    var myarraycondition = new Array("Posion", "Sleep", "Blinded", "Burn", "Confused", "Demented", "Chilled", "Muted");
     var random = myarraycondition[Math.floor(Math.random() * myarraycondition.length)];
     document.getElementById("condition").innerHTML=random;
}

/*
// This function is used for randomizing stat types
function GetStats(){
    var myarraystats= new Array("Str","Dex","Con");
    var random = myarraystats[Math.floor(Math.random() * myarraystats.length)];
    document.getElementById("stats").innerHTML=random;
}
*/


// This function is used to randomize different types of potions


const potionTypes = ["Cold", "Ice", "Fire", "Poison", "Decay", "Strength",
    "Dexterity", "Constitution", "Charisma", "Speed", "Health", "Regeneration",
    "Luck", "Quiet", "Mana", "Wind", "Water Breathing", "Flight", "Armor",
    "Thorns", "Spectrial Friend", "Love", "Dragons Breath", "Gods",
    "Animal Form", "Berserk", "Slow", "Haste", "Vision", "Confusion", "Disquise"];


function GetPotionType() {
    const randomIndex = Math.floor(Math.random() * potionTypes.length);
    document.getElementById("potionType").innerHTML = potionTypes[randomIndex];
}

function GetPotionPower() {
    var myarraypotionPower = new Array("Weak", "Normal", "Legendary");
    var random = myarraypotionPower[Math.floor(Math.random() * myarraypotionPower.length)];
    document.getElementById("potionPower").innerHTML = random;
}


// This is a function that will output a description with multiple inputs for potions


// Use variable story to write a description of the potion
// Use variable description to write the type of potion

function PotionDescription() {
    const potionPower = document.getElementById("potionPower").innerText;
    const potionType = document.getElementById("potionType").innerText;
    
    let description = "";
    let story = "";

    switch (true) {
        case potionPower === "Weak" && potionType === "Cold":
            description = "A Weak Cold Potion";
            story = "Farts!!!";
            break;
        case potionPower === "Weak" && potionType === "Ice":
            description = "A Weak Ice Potion";
            break;
        case potionPower === "Weak" && potionType === "Fire":
            description = "A Weak Fire Potion";
            break;
        case potionPower === "Weak" && potionType === "Poison":
            description = "A Weak Poison Potion";
            break;
        case potionPower === "Weak" && potionType === "Decay":
            description = "A Weak Decay Potion";
            break;
        case potionPower === "Weak" && potionType === "Strength":
            description = "A Weak Strength Potion";
            break;
        case potionPower === "Weak" && potionType === "Dexterity":
            description = "A Weak Dexterity Potion";
            break;
        case potionPower === "Weak" && potionType === "Constitution":
            description = "A Weak Constitution Potion";
            break;
        case potionPower === "Weak" && potionType === "Charisma":
            description = "A Weak Charisma Potion";
            break;
        case potionPower === "Weak" && potionType === "Speed":
            description = "A Weak Speed Potion";
            break;
        case potionPower === "Weak" && potionType === "Health":
            description = "A Weak Health Potion";
            break;
        case potionPower === "Weak" && potionType === "Regeneration":
            description = "A Weak Regeneration Potion";
            break;
        case potionPower === "Weak" && potionType === "Luck":
            description = "A Weak Luck Potion";
            break;
        case potionPower === "Weak" && potionType === "Quiet":
            description = "A Weak Quiet Potion";
            break;
        case potionPower === "Weak" && potionType === "Mana":
            description = "A Weak Mana Potion";
            break;
        case potionPower === "Weak" && potionType === "Wind":
            description = "A Weak Wind Potion";
            break;
        case potionPower === "Weak" && potionType === "Water Breathing":
            description = "A Weak Water Breathing Potion";
            break;
        case potionPower === "Weak" && potionType === "Flight":
            description = "A Weak Flight Potion";
            break;
        case potionPower === "Weak" && potionType === "Armor":
            description = "A Weak Armor Potion";
            break;
        case potionPower === "Weak" && potionType === "Thorns":
            description = "A Weak Thorns Potion";
            break;
        case potionPower === "Weak" && potionType === "Spectrial Friend":
            description = "A Weak Spectrial Friend Potion";
            break;
        case potionPower === "Weak" && potionType === "Love":
            description = "A Weak Love Potion";
            break;
        case potionPower === "Weak" && potionType === "Dragons Breath":
            description = "A Weak Dragons Breath Potion";
            break;
        case potionPower === "Weak" && potionType === "Gods":
            description = "A Weak Gods Potion";
            break;
        case potionPower === "Weak" && potionType === "Animal Form":
            description = "A Weak Animal Form Potion";
            break;
        case potionPower === "Weak" && potionType === "Berserk":
            description = "A Weak Beserk Potion";
            break;
        case potionPower === "Weak" && potionType === "Slow":
            description = "A Weak Slow Potion";
            break;
        case potionPower === "Weak" && potionType === "Haste":
            description = "A Weak Haste Potion";
            break;
        case potionPower === "Weak" && potionType === "Vision":
            description = "A Weak Vision Potion";
            break;
        case potionPower === "Weak" && potionType === "Confusion":
            description = "A Weak Confusion Potion";
            break;
        case potionPower === "Weak" && potionType === "Disguise":
            description = "A Weak Disguise Potion";
            break;

        case potionPower === "Normal" && potionType === "Cold":
            description = "A Normal Cold Potion";
            break;
        case potionPower === "Normal" && potionType === "Ice":
            description = "A Normal Ice Potion";
            break;
        case potionPower === "Normal" && potionType === "Fire":
            description = "A Normal Fire Potion";
            break;
        case potionPower === "Normal" && potionType === "Poison":
            description = "A Normal Poison Potion";
            break;
        case potionPower === "Normal" && potionType === "Decay":
            description = "A Normal Decay Potion";
            break;
        case potionPower === "Normal" && potionType === "Strength":
            description = "A Normal Strength Potion";
            break;
        case potionPower === "Normal" && potionType === "Dexterity":
            description = "A Normal Dexterity Potion";
            break;
        case potionPower === "Normal" && potionType === "Constitution":
            description = "A Normal Constitution Potion";
            break;
        case potionPower === "Normal" && potionType === "Charisma":
            description = "A Normal Charisma Potion";
            break;
        case potionPower === "Normal" && potionType === "Speed":
            description = "A Normal Speed Potion";
            break;
        case potionPower === "Normal" && potionType === "Health":
            description = "A Normal Health Potion";
            break;
        case potionPower === "Normal" && potionType === "Regeneration":
            description = "A Normal Regeneration Potion";
            break;
        case potionPower === "Normal" && potionType === "Luck":
            description = "A Normal Luck Potion";
            break;
        case potionPower === "Normal" && potionType === "Quiet":
            description = "A Normal Quiet Potion";
            break;
        case potionPower === "Normal" && potionType === "Mana":
            description = "A Normal Mana Potion";
            break;
        case potionPower === "Normal" && potionType === "Wind":
            description = "A Normal Wind Potion";
            break;
        case potionPower === "Normal" && potionType === "Water Breathing":
            description = "A Normal Water Breathing Potion";
            break;
        case potionPower === "Normal" && potionType === "Flight":
            description = "A Normal Flight Potion";
            break;
        case potionPower === "Normal" && potionType === "Armor":
            description = "A Normal Armor Potion";
            break;
        case potionPower === "Normal" && potionType === "Thorns":
            description = "A Normal Thorns Potion";
            break;
        case potionPower === "Normal" && potionType === "Spectrial Friend":
            description = "A Normal Spectrial Friend Potion";
            break;
        case potionPower === "Normal" && potionType === "Love":
            description = "A Normal Love Potion";
            break;
        case potionPower === "Normal" && potionType === "Dragons Breath":
            description = "A Normal Dragons Breath Potion";
            break;
        case potionPower === "Normal" && potionType === "Gods":
            description = "A Normal Gods Potion";
            break;
        case potionPower === "Normal" && potionType === "Animal Form":
            description = "A Normal Animal Form Potion";
            break;
        case potionPower === "Normal" && potionType === "Berserk":
            description = "A Normal Beserk Potion";
            break;
        case potionPower === "Normal" && potionType === "Slow":
            description = "A Normal Slow Potion";
            break;
        case potionPower === "Normal" && potionType === "Haste":
            description = "A Normal Haste Potion";
            break;
        case potionPower === "Normal" && potionType === "Vision":
            description = "A Normal Vision Potion";
            break;
        case potionPower === "Normal" && potionType === "Confusion":
            description = "A Normal Confusion Potion";
            break;
        case potionPower === "Normal" && potionType === "Disguise":
            description = "A Normal Disguise Potion";
            break;

        case potionPower === "Legendary" && potionType === "Cold":
            description = "A Legendary Cold Potion";
            break;
        case potionPower === "Legendary" && potionType === "Ice":
            description = "A Legendary Ice Potion";
            break;
        case potionPower === "Legendary" && potionType === "Fire":
            description = "A Legendary Fire Potion";
            break;
        case potionPower === "Legendary" && potionType === "Poison":
            description = "A Legendary Poison Potion";
            break;
        case potionPower === "Legendary" && potionType === "Decay":
            description = "A Legendary Decay Potion";
            break;
        case potionPower === "Legendary" && potionType === "Strength":
            description = "A Legendary Strength Potion";
            break;
        case potionPower === "Legendary" && potionType === "Dexterity":
            description = "A Legendary Dexterity Potion";
            break;
        case potionPower === "Legendary" && potionType === "Constitution":
            description = "A Legendary Constitution Potion";
            break;
        case potionPower === "Legendary" && potionType === "Charisma":
            description = "A Legendary Charisma Potion";
            break;
        case potionPower === "Legendary" && potionType === "Speed":
            description = "A Legendary Speed Potion";
            break;
        case potionPower === "Legendary" && potionType === "Health":
            description = "A Legendary Health Potion";
            break;
        case potionPower === "Legendary" && potionType === "Regeneration":
            description = "A Legendary Regeneration Potion";
            break;
        case potionPower === "Legendary" && potionType === "Luck":
            description = "A Legendary Luck Potion";
            break;
        case potionPower === "Legendary" && potionType === "Quiet":
            description = "A Legendary Quiet Potion";
            break;
        case potionPower === "Legendary" && potionType === "Mana":
            description = "A Legendary Mana Potion";
            break;
        case potionPower === "Legendary" && potionType === "Wind":
            description = "A Legendary Wind Potion";
            break;
        case potionPower === "Legendary" && potionType === "Water Breathing":
            description = "A Legendary Water Breathing Potion";
            break;
        case potionPower === "Legendary" && potionType === "Flight":
            description = "A Legendary Flight Potion";
            break;
        case potionPower === "Legendary" && potionType === "Armor":
            description = "A Legendary Armor Potion";
            break;
        case potionPower === "Legendary" && potionType === "Thorns":
            description = "A Legendary Thorns Potion";
            break;
        case potionPower === "Legendary" && potionType === "Spectrial Friend":
            description = "A Legendary Spectrial Friend Potion";
            break;
        case potionPower === "Legendary" && potionType === "Love":
            description = "A Legendary Love Potion";
            break;
        case potionPower === "Legendary" && potionType === "Dragons Breath":
            description = "A Legendary Dragons Breath Potion";
            break;
        case potionPower === "Legendary" && potionType === "Gods":
            description = "A Legendary Gods Potion";
            break;
        case potionPower === "Legendary" && potionType === "Animal Form":
            description = "A Legendary Animal Form Potion";
            break;
        case potionPower === "Legendary" && potionType === "Berserk":
            description = "A Legendary Beserk Potion";
            break;
        case potionPower === "Legendary" && potionType === "Slow":
            description = "A Legendary Slow Potion";
            break;
        case potionPower === "Legendary" && potionType === "Haste":
            description = "A Legendary Haste Potion";
            break;
        case potionPower === "Legendary" && potionType === "Vision":
            description = "A Legendary Vision Potion";
            break;
        case potionPower === "Legendary" && potionType === "Confusion":
            description = "A Legendary Confusion Potion";
            break;
        case potionPower === "Legendary" && potionType === "Disguise":
            description = "A Legendary Disguise Potion";
            break;

        default:
            description = "Unknown";
            story = "Unknown story";
    }

    document.getElementById("potionDescription").innerText = description;
    document.getElementById("potionStory").innerText = story;
}


    

    






















/*
  function PotionDescription() {
    let description = "";
    let story = "";

    var potionPower = document.getElementById("potionPower").innerText;
    var potionType = document.getElementById("potionType").innerText;

    //Weak

    if (potionPower == "Weak" && potionType == "Cold") {                                   // Weak and Cold
        description = "A Weak Cold Potion";
        story = "Farts!!!";
    }
    else if (potionPower == "Weak" && potionType == "Ice") {                               // Weak and Ice
        description = "A Weak Ice Potion";    
    }
    else if (potionPower == "Weak" && potionType == "Fire") {                               // Weak and Fire
        description = "A Weak Fire Potion";
    }
    else if (potionPower == "Weak" && potionType == "Poison") {                             // Weak and Poison
        description = "A Weak Poison Potion";
    }
    else if (potionPower == "Weak" && potionType == "Decay") {                             // Weak and Decay
        description = "A Weak Decay Potion";
    }
    else if (potionPower == "Weak" && potionType == "Strength") {                             // Weak and Strength
        description = "A Weak Strength Potion";
    }
    else if (potionPower == "Weak" && potionType == "Dexterity") {                             // Weak and Dexterity
        description = "A Weak Dexterity Potion";
    }
    else if (potionPower == "Weak" && potionType == "Constitution") {                             // Weak and Constitution
        description = "A Weak Constitution Potion";
    }
    else if (potionPower == "Weak" && potionType == "Charisma") {                             // Weak and Charisma
        description = "A Weak Charisma Potion";
    }
    else if (potionPower == "Weak" && potionType == "Speed") {                             // Weak and Speed
        description = "A Weak Speed Potion";
    }
    else if (potionPower == "Weak" && potionType == "Health") {                             // Weak and Health
        description = "A Weak Health Potion";
    }
    else if (potionPower == "Weak" && potionType == "Regeneration") {                             // Weak and Regeneration
        description = "A Weak Regeneration Potion";
    }
    else if (potionPower == "Weak" && potionType == "Luck") {                             // Weak and Luck
        description = "A Weak Luck Potion";
    }
    else if (potionPower == "Weak" && potionType == "Quiet") {                             // Weak and Quiet
        description = "A Weak Quiet Potion";
    }
    else if (potionPower == "Weak" && potionType == "Mana") {                             // Weak and Mana
        description = "A Weak Mana Potion";
    }
    else if (potionPower == "Weak" && potionType == "Wind") {                             // Weak and Wind
        description = "A Weak Wind Potion";
    }
    else if (potionPower == "Weak" && potionType == "Water Breathing") {                             // Weak and Water Breathing
        description = "A Weak Water Breathing Potion";
    }
    else if (potionPower == "Weak" && potionType == "Flight") {                             // Weak and Flight
        description = "A Weak Flight Potion";
    }
    else if (potionPower == "Weak" && potionType == "Armor") {                             // Weak and Armor
        description = "A Weak Armor Potion";
    }
    else if (potionPower == "Weak" && potionType == "Thorns") {                             // Weak and Thorns
        description = "A Weak Thorns Potion";
    }
    else if (potionPower == "Weak" && potionType == "Spectrial Friend") {                             // Weak and Spectrial Friend
        description = "A Weak Spectrial Friend Potion";
    }
    else if (potionPower == "Weak" && potionType == "Love") {                             // Weak and Love
        description = "A Weak Love Potion";
    }
    else if (potionPower == "Weak" && potionType == "Dragons Breath") {                             // Weak and Dragons Breath
        description = "A Weak Dragons Breath Potion";
    }
    else if (potionPower == "Weak" && potionType == "Gods") {                             // Weak and Gods
        description = "A Weak Gods Potion";
    }
    else if (potionPower == "Weak" && potionType == "Animal Form") {                             // Weak and Animal Form
        description = "A Weak Animal Form Potion";
    }
    else if (potionPower == "Weak" && potionType == "Berserk") {                             // Weak and Berserk
        description = "A Weak Berserk Potion";
    }
    else if (potionPower == "Weak" && potionType == "Slow") {                             // Weak and Slow
        description = "A Weak Slow Potion";
    }
    else if (potionPower == "Weak" && potionType == "Haste") {                             // Weak and Haste
        description = "A Weak Haste Potion";
    }
    else if (potionPower == "Weak" && potionType == "Vision") {                             // Weak and Vision
        description = "A Weak Vision Potion";
    }
    else if (potionPower == "Weak" && potionType == "Confusion") {                             // Weak and Confusion
        description = "A Weak Confusion Potion";
    }
    else if (potionPower == "Weak" && potionType == "Disquise") {                             // Weak and Disquise
        description = "A Weak Disquise Potion";
    }

    // Normal

    else if (potionPower == "Normal" && potionType == "Cold") {                                   // Normal and Cold
        description = "A Normal Cold Potion";
    }
    else if (potionPower == "Normal" && potionType == "Ice") {                               // Normal and Ice
        description = "A Normal Ice Potion";
    }
    else if (potionPower == "Normal" && potionType == "Fire") {                               // Normal and Fire
        description = "A Normal Fire Potion";
    }
    else if (potionPower == "Normal" && potionType == "Poison") {                             // Normal and Poison
        description = "A Normal Poison Potion";
    }
    else if (potionPower == "Normal" && potionType == "Decay") {                             // Normal and Decay
        description = "A Normal Decay Potion";
    }
    else if (potionPower == "Normal" && potionType == "Strength") {                             // Normal and Strength
        description = "A Normal Strength Potion";
    }
    else if (potionPower == "Normal" && potionType == "Dexterity") {                             // Normal and Dexterity
        description = "A Normal Dexterity Potion";
    }
    else if (potionPower == "Normal" && potionType == "Constitution") {                             // Normal and Constitution
        description = "A Normal Constitution Potion";
    }
    else if (potionPower == "Normal" && potionType == "Charisma") {                             // Normal and Charisma
        description = "A Normal Charisma Potion";
    }
    else if (potionPower == "Normal" && potionType == "Speed") {                             // Normal and Speed
        description = "A Normal Speed Potion";
    }
    else if (potionPower == "Normal" && potionType == "Health") {                             // Normal and Health
        description = "A Normal Health Potion";
    }
    else if (potionPower == "Normal" && potionType == "Regeneration") {                             // Normal and Regeneration
        description = "A Normal Regeneration Potion";
    }
    else if (potionPower == "Normal" && potionType == "Luck") {                             // Normal and Luck
        description = "A Normal Luck Potion";
    }
    else if (potionPower == "Normal" && potionType == "Quiet") {                             // Normal and Quiet
        description = "A Normal Quiet Potion";
    }
    else if (potionPower == "Normal" && potionType == "Mana") {                             // Normal and Mana
        description = "A Normal Mana Potion";
    }
    else if (potionPower == "Normal" && potionType == "Wind") {                             // Normal and Wind
        description = "A Normal Wind Potion";
    }
    else if (potionPower == "Normal" && potionType == "Water Breathing") {                             // Normal and Water Breathing
        description = "A Normal Water Breathing Potion";
    }
    else if (potionPower == "Normal" && potionType == "Flight") {                             // Normal and Flight
        description = "A Normal Flight Potion";
    }
    else if (potionPower == "Normal" && potionType == "Armor") {                             // Normal and Armor
        description = "A Normal Armor Potion";
    }
    else if (potionPower == "Normal" && potionType == "Thorns") {                             // Normal and Thorns
        description = "A Normal Thorns Potion";
    }
    else if (potionPower == "Normal" && potionType == "Spectrial Friend") {                             // Normal and Spectrial Friend
        description = "A Normal Spectrial Friend Potion";
    }
    else if (potionPower == "Normal" && potionType == "Love") {                             // Normal and Love
        description = "A Normal Love Potion";
    }
    else if (potionPower == "Normal" && potionType == "Dragons Breath") {                             // Normal and Dragons Breath
        description = "A Normal Dragons Breath Potion";
    }
    else if (potionPower == "Normal" && potionType == "Gods") {                             // Normal and Gods
        description = "A Normal Gods Potion";
    }
    else if (potionPower == "Normal" && potionType == "Animal Form") {                             // Normal and Animal Form
        description = "A Normal Animal Form Potion";
    }
    else if (potionPower == "Normal" && potionType == "Berserk") {                             // Normal and Berserk
        description = "A Normal Berserk Potion";
    }
    else if (potionPower == "Normal" && potionType == "Slow") {                             // Normal and Slow
        description = "A Normal Slow Potion";
    }
    else if (potionPower == "Normal" && potionType == "Haste") {                             // Normal and Haste
        description = "A Normal Haste Potion";
    }
    else if (potionPower == "Normal" && potionType == "Vision") {                             // Normal and Vision
        description = "A Normal Vision Potion";
    }
    else if (potionPower == "Normal" && potionType == "Confusion") {                             // Normal and Confusion
        description = "A Normal Confusion Potion";
    }
    else if (potionPower == "Normal" && potionType == "Disquise") {                             // Normal and Disquise
        description = "A Normal Disquise Potion";
    }

    // Legendary

    else if (potionPower == "Legendary" && potionType == "Cold") {                                   // Legendary and Cold
        description = "A Legendary Cold Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Ice") {                               // Legendary and Ice
        description = "A Normal Ice Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Fire") {                               // Legendary and Fire
        description = "A Legendary Fire Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Poison") {                             // Legendary and Poison
        description = "A Legendary Poison Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Decay") {                             // Legendary and Decay
        description = "A Legendary Decay Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Strength") {                             // Legendary and Strength
        description = "A Legendary Strength Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Dexterity") {                             // Legendary and Dexterity
        description = "A Legendary Dexterity Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Constitution") {                             // Legendary and Constitution
        description = "A Legendary Constitution Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Charisma") {                             // Legendary and Charisma
        description = "A Legendary Charisma Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Speed") {                             // Legendary and Speed
        description = "A Legendary Speed Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Health") {                             // Legendary and Health
        description = "A Legendary Health Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Regeneration") {                             // Legendary and Regeneration
        description = "A Legendary Regeneration Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Luck") {                             // Legendary and Luck
        description = "A Legendary Luck Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Quiet") {                             // Legendary and Quiet
        description = "A Legendary Quiet Potion";
    }
    else if (potionPower == "Normal" && potionType == "Mana") {                             // Normal and Mana
        description = "A Normal Mana Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Wind") {                             // Legendary and Wind
        description = "A Legendary Wind Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Water Breathing") {                             // Legendary and Water Breathing
        description = "A Legendary Water Breathing Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Flight") {                             // Legendary and Flight
        description = "A Normal Flight Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Armor") {                             // Legendary and Armor
        description = "A Normal Armor Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Thorns") {                             // Legendary and Thorns
        description = "A Legendary Thorns Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Spectrial Friend") {                             // Legendary and Spectrial Friend
        description = "A Legendary Spectrial Friend Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Love") {                             // Legendary and Love
        description = "A Legendary Love Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Dragons Breath") {                             // Legendary and Dragons Breath
        description = "A Legendary Dragons Breath Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Gods") {                             // Legendary and Gods
        description = "A Legendary Gods Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Animal Form") {                             // Legendary and Animal Form
        description = "A Legendary Animal Form Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Berserk") {                             // Legendary and Berserk
        description = "A Legendary Berserk Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Slow") {                             // Legendary and Slow
        description = "A Legendary Slow Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Haste") {                             // Legendary and Haste
        description = "A Legendary Haste Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Vision") {                             // Legendary and Vision
        description = "A Legendary Vision Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Confusion") {                             // Legendary and Confusion
        description = "A Legendary Confusion Potion";
    }
    else if (potionPower == "Legendary" && potionType == "Disquise") {                             // Legendary and Disquise
        description = "A Legendary Disquise Potion";
    }

    else {
        description = "Didn't work"
    }

    document.getElementById("potionFinal").innerText = description;
    document.getElementById("potionStory").innerText = story;
       
        
}
*/



// This function will randomize male names


function buttonNPCMaleNames() {

    var myarraynpcMalenames = new Array(
        "Aeldrin", "Aeron", "Aethrin", "Aidan", "Alastair", "Aldric", "Aleron", "Alvar", "Ambrosius", "Ancel",
        "Andras", "Andred", "Ansel", "Ansgar", "Archibald", "Ardal", "Ardan", "Arlen", "Armand", "Arminius",
        "Arnaud", "Arnulf", "Artorius", "Asbjorn", "Asger", "Astolf", "Athelred", "Auberon", "Audric", "Aurelian",
        "Auric", "Avery", "Baldric", "Balthazar", "Barclay", "Barden", "Barius", "Beau", "Beldrin", "Beren",
        "Bertrand", "Bohemond", "Braden", "Bram", "Brycen", "Cadogan", "Caedmon", "Caius", "Calhoun", "Caspian",
        "Cedric", "Cerdic", "Chadwick", "Cin�ed", "Clovis", "Colbert", "Colwyn", "Corbin", "Corin", "Cormac",
        "Cornelius", "Cullen", "Damien", "Darian", "Darren", "Davan", "Decius", "Demetrius", "Denzel", "Derrick",
        "Desmond", "Diarmuid", "Dominic", "Donovan", "Drystan", "Duncan", "Dunstan", "Eadric", "Eamon", "Edan",
        "Edric", "Edwyn", "Eldred", "Elias", "Elijah", "Emeric", "Emrys", "Eogan", "Eran", "Erland", "Erwin",
        "Ethan", "Evander", "Evelyn", "Fabian", "Fallon", "Faran", "Fausto", "Fendrel", "Fergus", "Finian",
        "Florian", "Folke", "Fynn", "Gaheris", "Galen", "Galeron", "Gareth", "Garrick", "Gawain", "Gawen",
        "Geffrey", "Gellert", "Geoffroi", "Gerard", "Gideon", "Gilbert", "Godric", "Godfrey", "Grady", "Griffith",
        "Gunnar", "Guthrie", "Hadrian", "Haldor", "Hamish", "Hannibal", "Harding", "Harlan", "Harrington", "Hartley",
        "Hayden", "Hector", "Hedwig", "Helios", "Henrick", "Heron", "Horatio", "Hubert", "Hugo", "Humphrey",
        "Ignatius", "Ingram", "Inigo", "Iorwerth", "Irvin", "Isadore", "Isidore", "Ivo", "Jace", "Jaden",
        "Jared", "Jasper", "Jaxon", "Jebediah", "Jericho", "Joachim", "Jochen", "Joffrey", "Jonah", "Joscelin",
        "Julian", "Jurian", "Justinian", "Kade", "Kai", "Kale", "Kallen", "Kameron", "Keegan", "Kendrick",
        "Kenelm", "Kenrick", "Kenton", "Kieran", "Killian", "Kiran", "Kylan", "Lachlan", "Lancelot", "Landon",
        "Larkin", "Laszlo", "Leander", "Leif", "Leland", "Leonidas", "Levi", "Liam", "Lionel", "Lochlann",
        "Loric", "Loren", "Lorenz", "Lucian", "Lucius", "Ludovic", "Luthias", "Lyle", "Maddox", "Magnus",
        "Malachi", "Malcolm", "Marius", "Marrok", "Martyn", "Mateo", "Matthias", "Mauger", "Maximilian", "Merick",
        "Merrick", "Milo", "Mordred", "Morgan", "Myles", "Nathaniel", "Neville", "Niall", "Nicodemus", "Nigel",
        "Nolan", "Norbert", "Octavian", "Odran", "Ois�n", "Orion", "Orson", "Osbert", "Osmund", "Oswald",
        "Otho", "Owen", "P�draig", "Parnell", "Peregrine", "Percival", "Peyton", "Phineas", "Quentin", "Quincy",
        "Radcliffe", "Radulf", "Rafe", "Raimond", "Raleigh", "Ramsey", "Randall", "Randolph", "Raoul", "Raven",
        "Rayner", "Redmond", "Reginald", "Remy", "Reynard", "Rhys", "Ricard", "Rickard", "Riordan", "Roald",
        "Roarke", "Robart", "Roben", "Rodin", "Rodney", "Rogar", "Roland", "Rolfe", "Rolf", "Roran",
        "Rory", "Rowan", "Rowland", "Rufus", "Rupert", "Rylan", "Sabin", "Sander", "S�bastien", "Seraphim",
        "Severin", "Seymour", "Silas", "Simeon", "Simon", "Siward", "Soren", "Stellan", "Sven", "Sylvester",
        "Tadhg", "Tancred", "Taran", "Tate", "Teagan", "Terence", "Thaddeus", "Theron", "Thorvald", "Thurgood",
        "Tiberius", "Tiernan", "Tobias", "Tristan", "Trygve", "Ulric", "Ulysses", "Urien", "Uriah", "Valerian",
        "Vance", "Vaughn", "Veron", "Vespasian", "Vidar", "Viggo", "Vincenz", "Virgil", "Walden", "Wallis",
        "Warden", "Warrick", "Wendell", "Weston", "Whitaker", "Wilbur", "Wilfred", "Wilhem", "Wilkins", "Willas",
        "Wulfric", "Wyatt", "Wymond", "Xavier", "Xavius", "Yves", "Zaccheus", "Zane", "Zephyr", "Zoltan"
    );

    var random = myarraynpcMalenames[Math.floor(Math.random() * myarraynpcMalenames.length)];

    document.getElementById("buttonNPCMaleNames").innerHTML = random;
}
;

// Audio for the potions page link;

function playAudioPotions() {
    var audioPotions = document.getElementById("hoverAudioPotions");
    audioPotions.volume = 0.1;
    audioPotions.play();
}

function stopAudioPotions() {
    var audioPotions = document.getElementById("hoverAudioPotions");
    audioPotions.pause();
}

// Audio for the Blacksmith page link

function playAudioBlackSmith() {
    var audioBlackSmith = document.getElementById("hoverAudioBlackSmith");
    audioBlackSmith.volume = 0.1;
    audioBlackSmith.play();
}

function stopAudioBlackSmith() {
    var audioBlackSmith = document.getElementById("hoverAudioBlackSmith");
    audioBlackSmith.pause();
}

// Audio to FUNNY TOWN

function playAudiofart() {
    var audiofart = document.getElementById("hoverAudioFart");
    audiofart.volume = 0.1;
    audiofart.play();
}

function stopAudioFart() {
    var audioFart = document.getElementById("hoverAudioFart");
    audioFart.pause();
}


    



//function resultFunction() {
  //  document.getElementById("result").innerHTML = "test"

//}

//function randomFunction() {
//    return Math.random()("Tall", "Short", "Skinny")
//}




// Hemets Array & random Function

function blacksmithHelmet() {
    var myarrayblacksmithHelmet = ['Test.png', 'Test1.png', 'Test2.png'];

    var randomblacksmithHelmet = myarrayblacksmithHelmet[Math.floor(Math.random() * myarrayblacksmithHelmet.length)];

    document.getElementById('helmetPicture').src = `./Pictures/${randomblacksmithHelmet}`
}
