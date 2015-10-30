var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
    all: starWarsNames, 
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    }
    else {
        var randomItens = [];
        for (var i = 0; i < number; i++) {
            randomItens.push(getRandomItem());
        }
        return randomItens;
    }
}