function Statement() {
}

Statement.prototype.print = function print(transactionHistory) {
  const { transactions } = transactionHistory;
  this._printTitle();
  for (let i = transactions.length - 1; i >= 0; i--) {
    console.log(`${this._formatDate(transactions[i].date)} ${this._formatAmount(transactions[i].amount)} ${transactions[i].balance}.00`);
  }
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
  if (amount < 0) { return `|| || ${Math.abs(amount)}.00 ||`; }

  return `|| ${amount}.00 || ||`;
};

module.exports = Statement;
