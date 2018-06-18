const TransactionHistory = require('./TransactionHistory');

function Account(transactionHistory = new TransactionHistory()) {
  this.balance = 0;
  this.transactionHistory = transactionHistory;
}

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function withdraw(amount) {
  this.balance -= amount;
};

module.exports = Account;
