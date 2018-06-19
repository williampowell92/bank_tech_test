const Account = require('../../lib/Account');

describe('printing balance history', () => {
  let account;
  const oldLog = console.log;

  beforeEach(() => {
    console.log = jasmine.createSpy('log');
  });

  afterEach(() => {
    console.log = oldLog;
  });

  it('prints correct balance history', () => {
    account = new Account();
    account.deposit(1000, new Date(2012, 0, 10));
    account.deposit(2000, new Date(2012, 0, 13));
    account.withdraw(500, new Date(2012, 0, 14));
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(console.log).toHaveBeenCalledWith('14/01/2012 || || 500.00 || 2500.00');
    expect(console.log).toHaveBeenCalledWith('13/01/2012 || 2000.00 || || 3000.00');
    expect(console.log).toHaveBeenCalledWith('10/01/2012 || 1000.00 || || 1000.00');
  });
});
