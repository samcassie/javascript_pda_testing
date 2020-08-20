const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000');
    });

    // write integration tests here in the form of "it should do something..."
    it('should have working number buttons', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number3')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('3');
    })

    it('should update display after arithmetical operations', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number3')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number4')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('7');
    })

    it('should be able to chain multiple operators', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number5')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number4')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('3');
    })

    it('should be able to display a decimal as a result', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number9')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('4.5');
    })

    it('should be able to display a negative number as a result', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number5')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-4');
    })

    it('should be able to display large numbers', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number1')).click();
        element(by.css('#number2')).click();
        element(by.css('#number3')).click();
        element(by.css('#number4')).click();
        element(by.css('#number5')).click();
        element(by.css('#number6')).click();
        element(by.css('#operator_multiply')).click();
        element(by.css('#number1')).click();
        element(by.css('#number0')).click();
        element(by.css('#number0')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('12345600');
    })

    it('should diplsay an error instead of infinity when divided by zero', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number5')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number0')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('Error');
    })


});
