var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
    beforeEach(function () {
        calculator = new Calculator()
    });

    // write unit tests here in the form of "it should do something..."
    it('can add two positive numbers', function(){
        calculator.previousTotal = 1;
        calculator.add(4);
        assert.equal(5, calculator.runningTotal);
    })

    it('can subtract two positive numbers', function(){
        calculator.previousTotal = 7;
        calculator.subtract(4);
        assert.equal(3, calculator.runningTotal);
    })

    it('can multiply two positive numbers', function(){
        calculator.previousTotal = 3;
        calculator.multiply(5);
        assert.equal(15, calculator.runningTotal);
    })

    it('can divide two positive numbers', function(){
        calculator.previousTotal = 21;
        calculator.divide(7);
        assert.equal(3, calculator.runningTotal);
    })

    it('can concatenate number clicks', function(){
        calculator.numberClick(5);
        calculator.numberClick(5);
        assert.equal(55, calculator.runningTotal);
    })

    it('can chain operations together', function(){
        calculator.numberClick(2);
        calculator.operatorClick('+');
        calculator.numberClick(3);
        calculator.operatorClick('/');
        calculator.numberClick(5);
        calculator.operatorClick('=');
        assert.equal(1, calculator.runningTotal);
    })


    it('can clear the running total', function(){
        calculator.runningTotal = 5;
        calculator.clearClick();
        assert.equal(0, calculator.runningTotal);
    })
});
