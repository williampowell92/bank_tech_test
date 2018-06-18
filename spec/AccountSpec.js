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

    it('increases balance by a different amount', () => {
      account.deposit(200);
      expect(account.balance).toEqual(200);
    });
  });

  describe('withdraw', () => {
    it('reduces balance by a given amount', () => {
      account.withdraw(100);
      expect(account.balance).toEqual(-100);
    });
  });
});
