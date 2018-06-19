const Transaction = require('./Transaction');

function TransactionHistory(TransactionConstructor = Transaction) {
  this.TransactionConstructor = TransactionConstructor;
  this.transactions = [];
}

TransactionHistory.prototype.addTransaction = function addTransaction(amount, balance, date) {
  this.transactions.push(new this.TransactionConstructor(amount, balance, date));
};

module.exports = TransactionHistory;
