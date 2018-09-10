const PubSub = require('../helpers/pub_sub');

const ResultView = function () {

};

ResultView.prototype.bindEvents= function () {
  PubSub.subscribe('NumberChecker:result-calculated', (event) => {
    const number = event.detail;
    this.displayResult(number);
  });
};
ResultView.prototype.displayResult  = function (result) {
  const resultElement = document.querySelector('#result');
  if (result) {
    resultElement.textContent = 'is prime'
  } else {
    resultElement.textContent = 'is not prime'
  }
};


module.exports = ResultView;
