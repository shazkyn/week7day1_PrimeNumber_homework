const FormView = require('./views/form_views.js');
const NumberChecker = require('./models/number_checker.js');
const ResultView  = require('./views/result_views.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const formView = new FormView();
    formView.bindEvents();

  const numberChecker =  new NumberChecker();
    numberChecker.bindEvents();

  const resultView = new ResultView();
    resultView.bindEvents();
});
