function Occupation(name, xp) {
    this.name = name;
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

function Person() {
    this.name = faker.name.findName();
    this.occupation = new Occupation("Unemployed");

    this.setOccupation = function (occupation, xp) {
        this.occupation = occupation;
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
const occupations = [new Occupation("Rookie", 5), new Occupation("Survivor", 10), new Occupation("Legend", 15)];
const clothes = [new Clothing("Leather Armor", 15), new Clothing("Copper Armor", 20), new Clothing("Iron Armor", 25), new Clothing("Steel Plate Armor", 30), new Clothing("Elven Armor", 35), new Clothing("Magma Set", 40)];
const quality = [new Quality("Poorly-Made", -10), new Quality("Common", 20), new Quality("Well-Made", 30), new Quality("Masterwork", 50), new Quality("Legendary", 80)];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePerson() {
    let person = new Person();

    person.setOccupation(getRandom(occupations));
    person.setClothes(getRandom(clothes));
    person.setQuality(getRandom(quality));
    person.setArmorRating(person.clothes.baseValue + person.quality.modifierValue);

    console.log(person.ArmorRating);
    console.log(person.clothes.baseValue + person.quality.modifierValue);
    console.log(person);

    return person;
}

function displayPerson(person) {
    document.querySelector(".charname").textContent = "Name: " + person.name;
    document.querySelector(".charrank").textContent = "Rank: " + person.occupation.name;
    document.querySelector(".chararmor").textContent = "Equipped: " + person.quality.quality + " " + person.clothes.name + ". Your total armor rating is " + person.ArmorRating + " (" + person.clothes.name + " : " + person.clothes.baseValue + ", " + person.quality.quality + " : " + person.quality.modifierValue + ")";
}

document.querySelector(".chardomizer-button").onclick = function () {
    let generatedPerson = generatePerson();
    displayPerson(generatedPerson);
}


let clickcount = 0;

function add() {
    clickcount = clickcount + 1;
    document.querySelector(".xp-button").value = clickcount;
    document.title = clickcount + " Clicker";
    console.log(clickcount);
}

function save() {
    localStorage.setItem("clickcount", clickcount)
}

function load() {
    clickcount = localStorage.getItem("clickcount");
    clickcount = parseInt(clickcount);
    document.querySelector(".xp-button").value = clickcount;
    document.title = clickcount + " Count";
}