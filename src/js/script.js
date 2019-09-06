function Occupation(name) {
    this.name = name;
}

function Clothing(name) {
    this.name = name;
}

function Quality(quality, percentage) {
    this.quality = quality;
    this.percentage = percentage;
}

function Person() {
    this.name = faker.name.findName();
    this.occupation = new Occupation("Unemployed");

    this.setOccupation = function (occupation) {
        this.occupation = occupation;
    };

    this.setClothes = function (clothes) {
        this.clothes = clothes;
    };

    this.setQuality = function (quality, percentage) {
        this.quality = quality;
        this.percentage = percentage;
    }
}

/* Other stuff */
const occupations = [new Occupation("Warrior"), new Occupation("Mage"), new Occupation("Ranger")];
const clothes = [new Clothing("Leather Armor"), new Clothing("Copper Chestplate")];
const quality = [new Quality("Common", 10), new Quality("Masterwork", 30), new Quality("Legendary", 100)];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePerson() {
    let person = new Person();

    person.setOccupation(getRandom(occupations));
    person.setClothes(getRandom(clothes));
    person.setQuality(getRandom(quality));

    return person;
}

function displayPerson(person) {
    document.querySelector(".charname").textContent = person.name;
    document.querySelector(".chardesc").textContent = person.name + " is a " + person.occupation.name + ". " + "They're wearing a " + person.quality.quality + " " + person.clothes.name + ". It offers " + person.quality.percentage + " points of defense.";
}

document.querySelector(".boy").onclick = function () {
    let generatedPerson = generatePerson();
    displayPerson(generatedPerson);
};