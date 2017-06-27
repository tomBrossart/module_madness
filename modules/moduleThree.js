var convert = require('./convertToDollars.js');
var ranNum = require('./randomNumber.js');

function ranDollar(ranNum) {
  return convert(ranNum);
}

function accountBalance(ranDollar) {
  return "Account balance: \n" + ranDollar;
}

module.exports= {
  ranDollar: ranDollar,
  accountBalance: accountBalance
};
