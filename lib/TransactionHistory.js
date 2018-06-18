const Transaction = require('./Transaction');

function TransactionHistory(TransactionConstructor = Transaction) {
  this.TransactionConstructor = TransactionConstructor;
  this.transactions = [];
}

TransactionHistory.prototype.add = function add() {
  this.transactions = [new this.TransactionConstructor()];
};

module.exports = TransactionHistory;
