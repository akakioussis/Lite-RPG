function Experience(experience) {
    this.experience = experience;
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
    this.generator = new Generator("None", 0, 0, 0);

    this.setExperience = function (experience) {
        this.experience = experience;
    };

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

function xpOverTime() {

    for (i = 0; i < generators.length; i++) {
        person.generator.pointTake = person.generator.pointTake + ownedGenerators;
        if (person.experience.experience >= generators[i].pointTake) {
            setInterval(function () {
                person.experience.experience = person.experience.experience + person.generator.pointGive;
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