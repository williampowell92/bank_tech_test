function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};

module.exports = Account;
