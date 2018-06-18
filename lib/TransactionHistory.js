function TransactionHistory() {
  this.transactions = [];
}

TransactionHistory.prototype.add = function add(transaction) {
  this.transactions.push(transaction);
};

module.exports = TransactionHistory;
