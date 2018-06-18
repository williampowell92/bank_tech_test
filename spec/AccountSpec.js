const Account = require('../lib/Account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('balance', () => {
    it('is created with a balance of 0', () => {
      expect(account.balance).toEqual(0);
    });
  });

  describe('deposit', () => {
    it('increases balance by a given amount', () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
  });
});