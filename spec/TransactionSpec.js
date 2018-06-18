const Transaction = require('../lib/Transaction');

describe('Transaction', () => {
  let transaction;
  let differentTransaction;

  beforeEach(() => {
    transaction = new Transaction(100, 3000, new Date(2012, 1, 10));
    differentTransaction = new Transaction(-100, 2000, new Date(2018, 7, 2));
  });

  describe('date', () => {
    it('is created with a date', () => {
      expect(transaction.date).toEqual(new Date(2012, 1, 10));
    });

    it('can be created with a different date', () => {
      expect(differentTransaction.date).toEqual(new Date(2018, 7, 2));
    });

    it('uses todays date if none is defined', () => {
      transaction = new Transaction(-100, 2000);
      expect(transaction.date).toEqual(new Date());
    });
  });

  describe('amount', () => {
    it('is created with an amount', () => {
      expect(transaction.amount).toEqual(100);
    });

    it('can be created with a different amount', () => {
      expect(differentTransaction.amount).toEqual(-100);
    });
  });

  describe('balance', () => {
    it('is created with a balance', () => {
      expect(transaction.balance).toEqual(3000);
    });

    it('can be created with a different balance', () => {
      expect(differentTransaction.balance).toEqual(2000);
    });
  });
});
