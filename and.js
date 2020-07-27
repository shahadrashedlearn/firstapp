const bitwise = require('bitwise');

module.exports = function (firstOperand, secondOperand){
    return bitwise.bits.and(firstOperand, secondOperand);
}