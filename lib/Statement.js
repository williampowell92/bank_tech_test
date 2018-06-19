function Statement() {
}

Statement.prototype.print = function print() {
  this._printTitle();
};

Statement.prototype._printTitle = function _printTitle() {
  console.log('date || credit || debit || balance');
};

module.exports = Statement;
