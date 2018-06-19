function Statement() {
}

Statement.prototype.print = function print() {
  this._printTitle();
  console.log('10/01/2012 || 1000.00 || || 1000.00');
};

Statement.prototype._printTitle = function _printTitle() {
  console.log('date || credit || debit || balance');
};

module.exports = Statement;
