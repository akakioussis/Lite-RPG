function Generator(pointTake, pointGive, pointInterval) {
    this.pointTake = pointTake;
    this.pointGive = pointGive;
    this.pointInterval = pointInterval;
}

function Person() {
    this.name = "You";
    this.experience = 0;
    this.generator = new Generator(0, 0, 0);

    this.setGenerator = function (pointTake, pointGive, pointInterval) {
        this.pointTake = pointTake;
        this.pointGive = pointGive;
        this.pointInterval = pointInterval;
    }
}

/* Other stuff */
let person = new Person();
let xpgen1 = document.querySelector('.xpgen1');
const playerxp = person.experience;
// const generators = new Generator();
let ownedGenerators = [];

function displayPerson(person) {
    document.querySelector(".charlevel").textContent = "Experience: " + person.experience;
    document.querySelector(".charexp").textContent = "You have " + person.experience + " xp";
    document.querySelector(".chargenerators").textContent = "XP Generators: " + ownedGenerators.length;
}

displayPerson(person);

document.querySelector(".xp-button").onclick = function () {
    person.experience = person.experience + 1;
    displayPerson(person);
}

function addGenerator() {
    let objectGenerator = new Generator();
    console.log(person.generator);
    ownedGenerators.push(objectGenerator);
    displayPerson(person);
}

xpgen1.onclick = addGenerator;



// document.querySelector(".xp-button").onclick = function () {
//     person.experience.experience = person.experience.experience + 1;

//     for (i = 0; i < playerxp.length; i++) {
//         if (person.experience.experience == playerxp[i]) {
//             person.experience.experience = playerxp[i];
//         }
//     }
//     displayPerson(person);
// }

// function xpOverTime() {

//     for (i = 0; i < generators.length; i++) {
//         person.generator.pointTake = person.generator.pointTake + ownedGenerators;
//         if (person.experience.experience >= person.generator.pointTake) {
//             setInterval(function () {
//                 person.experience.experience = person.experience.experience + person.generator.pointGive;
//                 console.log(person.experience.experience);
//                 displayPerson(person);

//             }, person.generator.pointInterval);
//         }
//         person.experience.experience = person.experience.experience - person.generator.pointTake;
//         console.log("-" + person.generator.pointTake + " for");
//     }
//     return ownedGenerators = +1;
// }

// function addGenerator() {
//     let generator = new Generator();
//     for (i = 0; i < generators.length; i++) {
//         if (person.experience.experience >= generators[i].pointTake) {
//             person.generator = generators[i];
//             xpOverTime();
//         }
//     }
//     console.log(person.experience.experience);
//     displayPerson(person);
//     return generator;
// }

// xpgen1.onclick = addGenerator;