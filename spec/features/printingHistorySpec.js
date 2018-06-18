const Account = require('../../lib/Account');

describe('printing balance history', () => {
  let account;

  it('prints correct balance history', () => {
    account = new Account();
    account.deposit(1000, new Date(2012, 1, 10));
    account.deposit(2000, new Date(2012, 1, 13));
    account.withdraw(500, new Date(2012, 1, 14));
    expect(account.printStatement()).toEqual(`    date   ||  credit ||   debit     ||   balance
       14/01/2012 ||         ||   500.00    ||   2500.00
       13/01/2012 || 2000.00 ||             ||   3000.00
       10/01/2012 || 1000.00 ||             ||   1000.00`);
  });
});
