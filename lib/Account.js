function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function deposit() {
  this.balance = 100;
};

module.exports = Account;
