const TransactionHistory = require('./TransactionHistory');

function Account(transactionHistory = new TransactionHistory()) {
  this.balance = 0;
  this.transactionHistory = transactionHistory;
}

Account.prototype.deposit = function deposit(amount, date) {
  this.balance += amount;

  this._addTransaction(amount, this.balance, date);
};

Account.prototype.withdraw = function withdraw(amount, date) {
  this.balance -= amount;

  this._addTransaction(amount, this.balance, date);
};

Account.prototype._addTransaction = function _addTransaction(amount, balance, date) {
  this.transactionHistory.add(amount, balance, date);
};

module.exports = Account;
