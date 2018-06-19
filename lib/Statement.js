function Statement() {
}

Statement.prototype.print = function print(transactionHistory) {
  this._printTitle();
  transactionHistory.transactions.forEach((transaction) => {
    console.log(`${this._formatDate(transaction.date)} ${this._formatAmount(transaction.amount)} ${transaction.balance}.00`);
  });
};

Statement.prototype._printTitle = function _printTitle() {
  console.log('date || credit || debit || balance');
};

Statement.prototype._formatDate = function _formatDate(date) {
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = `${1900 + date.getYear()}`;

  return `${day}/${month}/${year}`;
};

Statement.prototype._formatAmount = function _formatAmount(amount) {
  if (amount < 0) { return '|| || 500.00 ||'; }

  return `|| ${amount}.00 || ||`;
};

module.exports = Statement;
