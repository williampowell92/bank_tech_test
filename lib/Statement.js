function Statement() {
}

Statement.prototype.print = function print(transactionHistory) {
  this._printTitle();
  transactionHistory.transactions.forEach((transaction) => {
    console.log(`${this._formatDate(transaction.date)} || ${transaction.amount}.00 || || ${transaction.balance}.00`);
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

module.exports = Statement;
