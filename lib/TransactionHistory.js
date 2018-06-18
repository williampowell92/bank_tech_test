function TransactionHistory() {
  this.transactions = [];
}

TransactionHistory.prototype.add = function add(transaction) {
  this.transactions = [transaction];
};

module.exports = TransactionHistory;
