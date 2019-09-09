/* Object structure */

function Generator(pointTake, pointGive, pointInterval) {
    this.pointTake = pointTake;
    this.pointGive = pointGive;
    this.pointInterval = pointInterval;
}

function Player() {
    this.name = "You";
    this.experience = 0;
    this.generator = new Generator(5, 1, 1250);
}

/* Global variables */
let player = new Player();
let pointsPerSec = 0;
let ownedGenerators = [];
let pointGen = document.querySelector('.pointGen');
pointGen.onclick = allowGenerator;


/* Functions */

function displayPlayer(player) {
    document.querySelector(".playerPPS").textContent = "Points/sec: " + pointsPerSec;
    document.querySelector(".playerxp").textContent = "You have " + player.experience + " points";
    document.querySelector(".playerOwnedGen").textContent = "Point Generators: " + ownedGenerators.length;
    document.querySelector(".pointGen").textContent = "Point generator, costs: " + player.generator.pointTake;
    document.title = player.experience + " points";
}

function addGenerator() {
    let objectGenerator = new Generator();
    console.log(player.generator);
    ownedGenerators.push(objectGenerator);
    displayPlayer(player);
}


function defineGenerator() {
    player.experience = player.experience - player.generator.pointTake;
    player.generator.pointTake = player.generator.pointTake + 1;
}


function runGenerator() {
    player.experience = player.experience + 1;
}

function allowGenerator() {
    if (player.experience >= player.generator.pointTake) {
        addGenerator();
        defineGenerator();
        setInterval(runGenerator, 2000);
        return pointsPerSec += 1;

    }
    displayPlayer(player);
}

document.querySelector(".pointClick").onclick = function () {
    player.experience = player.experience + 1;
    displayPlayer(player);
}

setInterval(displayPlayer, 100, player);





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