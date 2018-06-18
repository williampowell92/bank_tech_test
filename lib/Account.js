function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function withdraw() {
  this.balance = -100;
};

module.exports = Account;
