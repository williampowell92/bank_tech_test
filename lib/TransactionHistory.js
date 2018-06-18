function TransactionHistory() {
  this.transactions = [];
}

TransactionHistory.prototype.add = function add() {
  this.transactions = [{
    date: new Date(2012, 1, 1),
    amount: 100,
    balance: 1000,
  }];
};

module.exports = TransactionHistory;
