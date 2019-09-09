/* Object structure */

function Generator(pointTake, pointGive, pointInterval) {
    this.pointTake = pointTake;
    this.pointGive = pointGive;
    this.pointInterval = pointInterval;
}

function Person() {
    this.name = "You";
    this.experience = 0;
    this.generator = new Generator(5, 1, 1250);
}

/* Global variables */
let person = new Person();
let xpPerSec = 0;
let ownedGenerators = [];
let xpgen = document.querySelector('.xpgen');
xpgen.onclick = allowGenerator;


/* Functions */

function displayPerson(person) {
    document.querySelector(".charlevel").textContent = "XP/sec: " + xpPerSec;
    document.querySelector(".charexp").textContent = "You have " + person.experience + " xp";
    document.querySelector(".chargenerators").textContent = "XP Generators: " + ownedGenerators.length;
    document.querySelector(".xpgen").textContent = "XP generator, costs: " + person.generator.pointTake;

}

function addGenerator() {
    let objectGenerator = new Generator();
    console.log(person.generator);
    ownedGenerators.push(objectGenerator);
    displayPerson(person);
}


function defineGenerator() {
    person.experience = person.experience - person.generator.pointTake;
    person.generator.pointTake = person.generator.pointTake + 1;
}


function runGenerator() {
    person.experience = person.experience + 1;
}

function allowGenerator() {
    if (person.experience >= person.generator.pointTake) {
        addGenerator();
        defineGenerator();
        setInterval(runGenerator, 2000);
        return xpPerSec += 1;

    }
    displayPerson(person);
}

document.querySelector(".xp-button").onclick = function () {
    person.experience = person.experience + 1;
    displayPerson(person);
}

setInterval(displayPerson, 100, person);





////////////////////////////////////////////

//optional


// function defineGenerator(pointTake, pointGive, pointInterval) {
//     // let pointTake = person.generator.pointTake;
//     // let pointGive = person.generator.pointGive;
//     // let pointInterval = person.generator.pointInterval;

//     pointTake = person.experience - person.generator.pointTake;;
//     pointGive = person.generator.pointTake + 1;
//     pointInterval = 1000;

//     return pointTake, pointGive, pointInterval;
// }

// function allowGenerator() {
//     if (person.experience >= person.generator.pointTake) {
//         addGenerator();
//         setInterval(defineGenerator, 1000, 5, 1);
//     }
//     displayPerson(person);
// }

// xpgen1.onclick = allowGenerator;