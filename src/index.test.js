import {expect} from 'chai';
import starWars from './index';

describe('starwars-names', function() {
    describe('all', function () {
        it('should be an array of string', function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

           function isArrayOfStrings(array) {
                return array.every(function(iten) {
                    return typeof iten === 'string';
                });
            }
       });

       it('should contain Luke Skywalker', function() {
            expect(starWars.all).to.include('Luke Skywalker');
       });
    });

    describe('random', function () {
        it('should return a random item from the starWars.all', function() {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });

        it('should return an array of random itens if passed a number', function() {
            var randomItens = starWars.random(3);
            expect(randomItens).to.have.length(3);
            randomItens.forEach(function(item){
                expect(starWars.all).to.include(item);
            });
        });
    });
});