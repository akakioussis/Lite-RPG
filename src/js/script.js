function Experience(experience) {
    this.experience = experience;
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
    this.experience = new Experience(0);
    this.clothing = new Clothing("Rags", 0);
    this.quality = new Quality("Broken", 0);
    this.generator = new Generator("None", 0, 0, 0);

    this.setExperience = function (experience) {
        this.experience = experience;
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
let ownedGenerators = 0;
const playerxp = [new Experience(5), new Experience(10), new Experience(15)];
const clothes = [new Clothing("Leather Armor", 15), new Clothing("Copper Armor", 20), new Clothing("Iron Armor", 25), new Clothing("Steel Plate Armor", 30), new Clothing("Elven Armor", 35), new Clothing("Magma Set", 40)];
const quality = [new Quality("Poorly-Made", -10), new Quality("Common", 20), new Quality("Well-Made", 30), new Quality("Masterwork", 50), new Quality("Legendary", 80)];
const generators = [new Generator("Lame", ownedGenerators + 5, 1, 3000)];

let xpgen1 = document.querySelector('.xpgen1');

let person = new Person();

function displayPerson(person) {
    document.querySelector(".charlevel").textContent = "Experience: " + person.experience.experience;
    document.querySelector(".charexp").textContent = "You have " + person.experience.experience + " xp";
    document.querySelector(".chargenerators").textContent = "XP Generators: " + ownedGenerators;
}

displayPerson(person);

document.querySelector(".xp-button").onclick = function () {
    person.experience.experience = person.experience.experience + 1;

    for (i = 0; i < playerxp.length; i++) {
        if (person.experience.experience == playerxp[i]) {
            person.experience.experience = playerxp[i];
        }
    }
    displayPerson(person);
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function xpOverTime() {

    for (i = 0; i < generators.length; i++) {
        person.generator.pointTake = person.generator.pointTake + ownedGenerators;
        // person.generator.pointTake = person.generator.pointTake + ownedGenerators;
        if (person.experience.experience >= generators[i].pointTake) {
            setInterval(function () {
                person.experience.experience = person.experience.experience + person.generator.pointGive;
                // console.log("1 xp added!");
                console.log(person.experience.experience);
                displayPerson(person);

            }, person.generator.pointInterval);
        }
        person.experience.experience = person.experience.experience - person.generator.pointTake;
        console.log("-" + person.generator.pointTake + " for");
    }
    return ownedGenerators = ownedGenerators + 1;
}

function addGenerator() {
    let generator = new Generator();
    for (i = 0; i < generators.length; i++) {
        if (person.experience.experience >= generators[i].pointTake) {
            person.generator = generators[i];
            xpOverTime();
        }
    }
    console.log(person.experience.experience);
    displayPerson(person);
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