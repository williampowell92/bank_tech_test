const Account = require('../lib/Account');

describe('Account', () => {
  let account;
  let transactionHistory;

  beforeEach(() => {
    transactionHistory = jasmine.createSpyObj('transactionHistory', ['add']);
    account = new Account(transactionHistory);
  });

  describe('balance', () => {
    it('is created with a balance of 0', () => {
      expect(account.balance).toEqual(0);
    });
  });

  describe('transactionHistory', () => {
    it('is created with a transaction history', () => {
      expect(account.transactionHistory).toEqual(transactionHistory);
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

    it('calls add on transaction history', () => {
      account.deposit(100, new Date(2012, 1, 1));

      expect(transactionHistory.add).toHaveBeenCalledWith(100, 100, new Date(2012, 1, 1));
    });
  });

  describe('withdraw', () => {
    it('reduces balance by a given amount', () => {
      account.withdraw(100);

      expect(account.balance).toEqual(-100);
    });

    it('reduces balance by a different amount', () => {
      account.withdraw(200);

      expect(account.balance).toEqual(-200);
    });

    it('calls add on transaction history', () => {
      account.withdraw(100, new Date(2012, 1, 1));

      expect(transactionHistory.add).toHaveBeenCalledWith(100, -100, new Date(2012, 1, 1));
    });
  });
});
