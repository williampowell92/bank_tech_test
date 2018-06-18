const Transaction = require('../lib/Transaction');

describe('Transaction', () => {
  let transaction;
  let differentTransaction;

  beforeEach(() => {
    transaction = new Transaction(new Date(2012, 1, 10), 100);
    differentTransaction = new Transaction(new Date(2018, 7, 2), -100);
  });

  describe('date', () => {
    it('is created with a date', () => {
      expect(transaction.date).toEqual(new Date(2012, 1, 10));
    });

    it('can be created with a different date', () => {
      expect(differentTransaction.date).toEqual(new Date(2018, 7, 2));
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
});
