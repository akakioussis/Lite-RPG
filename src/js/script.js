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

/* Other stuff */
let person = new Person();
let xpgen1 = document.querySelector('.xpgen1');
const playerxp = person.experience;
let ownedGenerators = [];

function displayPerson(person) {
    document.querySelector(".charlevel").textContent = "Total experience earned: " + person.experience;
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

function defineGenerator() {
    person.experience = person.experience - person.generator.pointTake;
    person.generator.pointTake = person.generator.pointTake + 1;
}

function runGenerator() {
    person.experience = person.experience + 1;
}

setInterval(displayPerson, 100, person);

function allowGenerator() {
    if (person.experience >= person.generator.pointTake) {
        addGenerator();
        defineGenerator();
        setInterval(runGenerator, 2000);

    }
    displayPerson(person);
}

xpgen1.onclick = allowGenerator;



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