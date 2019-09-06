function Occupation(name) {
    this.name = name;
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

    this.setOccupation = function (occupation) {
        this.occupation = occupation;
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
const occupations = [new Occupation("Warrior"), new Occupation("Mage"), new Occupation("Ranger")];
const clothes = [new Clothing("Leather Armor", 15), new Clothing("Copper Armor", 20), new Clothing("Iron Armor", 25), new Clothing("Steel Plate Armor", 30), new Clothing("Elven Armor", 35), new Clothing("Magma Set", 40)];
const quality = [new Quality("Poorly-Made", 10), new Quality("Common", 20), new Quality("Well-Made", 30), new Quality("Masterwork", 50), new Quality("Legendary", 80)];

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
    document.querySelector(".charname").textContent = person.name;
    document.querySelector(".chardesc").textContent = person.name + " is a " + person.occupation.name + ". " + "They're wearing a " + person.quality.quality + " " + person.clothes.name + ". The set's base value offers " + person.clothes.baseValue + " points of defense, with an additional " + person.quality.modifierValue + " points of defence, due to its " + person.quality.quality + " modifier." + " Your total Armor Rating (AR) is " + person.ArmorRating;

}

document.querySelector(".boy").onclick = function () {
    let generatedPerson = generatePerson();
    displayPerson(generatedPerson);
}