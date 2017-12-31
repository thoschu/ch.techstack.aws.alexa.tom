const R = require('ramda');

function add(param1, param2) {
    return R.add(param1, param2);
};

function subtract(param1, param2) {
    return R.subtract(param1, param2);
};

function divide(param1, param2) {
    return R.divide(param1, param2);
};

function multiply(param1, param2) {
    return R.multiply(param1, param2);
};

module.exports = {
    add,
    subtract,
    divide,
    multiply
};