const TransactionHistory = require('./TransactionHistory');
const Statement = require('./Statement');

function Account(transactionHistory = new TransactionHistory(), statement = new Statement()) {
  this.balance = 0;
  this.transactionHistory = transactionHistory;
  this.statement = statement;
}

Account.prototype.deposit = function deposit(amount, date) {
  this.balance += amount;

  this._addTransaction(amount, this.balance, date);
};

Account.prototype.withdraw = function withdraw(amount, date) {
  this.balance -= amount;

  this._addTransaction(-amount, this.balance, date);
};

Account.prototype.printStatement = function printStatement() {
  this.statement.print(this.transactionHistory);
};

Account.prototype._addTransaction = function _addTransaction(amount, balance, date) {
  this.transactionHistory.add(amount, balance, date);
};

module.exports = Account;
