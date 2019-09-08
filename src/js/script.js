function Level(level, xp) {
    this.level = level;
    this.xp = xp;
}

function Clothing(name, baseValue) {
    this.name = name;
    this.baseValue = baseValue;
}

function Quality(quality, modifierValue) {
    this.quality = quality;
    this.modifierValue = modifierValue;
}

function ArmorRating(ArmorRating) {
    this.ArmorRating = ArmorRating;
}

function Generator(name, requirement) {
    this.name = name;
    this.requirement = requirement;
}

function Person() {
    this.name = "You";
    this.level = new Level("Unleveled", 0);
    this.clothing = new Clothing("Rags", 0);
    this.quality = new Quality("Broken", 0);

    this.setLevel = function (level, xp) {
        this.level = level;
        this.xp = xp;
    };

    this.setClothes = function (clothes, baseValue) {
        this.clothes = clothes;
        this.baseValue = baseValue;
    };

    this.setQuality = function (quality, modifierValue) {
        this.quality = quality;
        this.modifierValue = modifierValue;
    }

    this.setArmorRating = function (ArmorRating) {
        this.ArmorRating = ArmorRating;
    }

}

/* Other stuff */
const levels = [new Level("Rookie", 5), new Level("Survivor", 10), new Level("Legend", 15)];
const clothes = [new Clothing("Leather Armor", 15), new Clothing("Copper Armor", 20), new Clothing("Iron Armor", 25), new Clothing("Steel Plate Armor", 30), new Clothing("Elven Armor", 35), new Clothing("Magma Set", 40)];
const quality = [new Quality("Poorly-Made", -10), new Quality("Common", 20), new Quality("Well-Made", 30), new Quality("Masterwork", 50), new Quality("Legendary", 80)];
const generators = [new Generator("Lame Generator", 15)];

let person = new Person();




function displayPerson(person) {
    document.querySelector(".charlevel").textContent = "Level: " + person.level.level;
    document.querySelector(".charexp").textContent = "You have " + person.level.xp + " xp";
}

displayPerson(person);

document.querySelector(".xp-button").onclick = function () {
    person.level.xp = person.level.xp + 1;

    for (i = 0; i < levels.length; i++) {
        if (person.level.xp == levels[i].xp) {
            person.level.level = levels[i].level;
        }
    }
    displayPerson(person);
}

function xpOverTime() {
    setInterval(function () {
        person.level.xp = person.level.xp + 1;
        console.log("1 xp added!");
        displayPerson(person);
    }, 1500);
}

// if (person.level.xp === 15) {
//     document.querySelector(".xpgen1").onclick = xpOverTime();
// }

let xpgen1 = document.querySelector('.xpgen1');


function allow() {
    for (i = 0; i < generators.length; i++) {
        if (person.level.xp == generators[i].requirement) {
            xpOverTime();

        }
    }
}

xpgen1.onclick = allow();



// function add() {
//     person.level.xp = person.level.xp + 1;
//     document.querySelector(".xp-button").value = person.level.xp;
//     document.title = experience + " Clicker";
//     console.log(person.level.xp);
// }

// function save() {
//     localStorage.setItem("clickcount", clickcount)
// }

// function load() {
//     clickcount = localStorage.getItem("clickcount");
//     clickcount = parseInt(clickcount);
//     document.querySelector(".xp-button").value = clickcount;
//     document.title = clickcount + " Count";
// }

// function getRandom(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }


// function xpOverTime() {

//     setInterval(xpOverTime, 1500);
// }