const PubSub = require('../helpers/pub_sub.js');

const NumberChecker = function () {

};

NumberChecker.prototype.bindEvents = function () {
 PubSub.subscribe('FormView:number-submitted', (event) => {
   const inputtedNumber = event.detail
   const result = this.checkNumber(inputtedNumber);
   PubSub.publish('NumberChecker:result-calculated', result);
 })
};

NumberChecker.prototype.checkNumber = function(number){
// console.log(number);
// function in here

        for(var i = 2; i < number; i++)
          if(number % i === 0) return false;
        return number !== 1;

};

module.exports = NumberChecker;
