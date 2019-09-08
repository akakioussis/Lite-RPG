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

function Generator(quality, pointTake, pointGive, pointInterval) {
    this.quality = quality;
    this.pointTake = pointTake;
    this.pointGive = pointGive;
    this.pointInterval = pointInterval;
}

function Person() {
    this.name = "You";
    this.level = new Level("Unleveled", 0);
    this.clothing = new Clothing("Rags", 0);
    this.quality = new Quality("Broken", 0);
    this.generator = new Generator("None", 0, 0, 0);

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

    this.setGenerator = function (quality, pointTake, pointGive, pointInterval) {
        this.quality = quality;
        this.pointTake = pointTake;
        this.pointGive = pointGive;
        this.pointInterval = pointInterval;
    }
}

/* Other stuff */
const levels = [new Level("Rookie", 5), new Level("Survivor", 10), new Level("Legend", 15)];
const clothes = [new Clothing("Leather Armor", 15), new Clothing("Copper Armor", 20), new Clothing("Iron Armor", 25), new Clothing("Steel Plate Armor", 30), new Clothing("Elven Armor", 35), new Clothing("Magma Set", 40)];
const quality = [new Quality("Poorly-Made", -10), new Quality("Common", 20), new Quality("Well-Made", 30), new Quality("Masterwork", 50), new Quality("Legendary", 80)];
const generators = [new Generator("Lame", 5, 5, 1500), new Generator("Common", 10, 10, 1500)];

let person = new Person();
// let generator = new Generator();

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

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let xpgen1 = document.querySelector('.xpgen1');

function xpOverTime() {

    for (i = 0; i < generators.length; i++) {
        if (person.level.xp >= generators[i].pointTake) {
            setInterval(function () {
                person.level.xp = person.level.xp + 1;
                console.log("1 xp added!");
                displayPerson(person);
            }, 1500);
            person.level.xp = person.level.xp - person.generator.pointTake;

        }
    }

}

function addGenerator() {
    let generator = new Generator();
    for (i = 0; i < generators.length; i++) {
        if (person.level.xp == generators[i].pointTake) {
            person.generator = generators[i];
            xpOverTime();
        }
    }
    console.log(person.generator.quality);
    return generator;
}

xpgen1.onclick = addGenerator;


// for (i = 0; i < generators.length; i++) {
//     if (person.level.xp >= generators[i].pointTake) {
//         person.setGenerator(generators[0]);
//         console.log(person.generator);
//     }
// }

// console.log(person.generator);


// addGenerator();



// for (i = 0; i < levels.length; i++){
//     if (person.level.xp == generators[i].pointTake) {

//     }
// }






// if (person.level.xp === 15) {
//     document.querySelector(".xpgen1").onclick = xpOverTime();
// }



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