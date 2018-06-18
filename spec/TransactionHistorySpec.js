const TransactionHistory = require('../lib/TransactionHistory');

describe('TransactionHistory', () => {
  let transactionHistory;
  let transaction;

  beforeEach(() => {
    transactionHistory = new TransactionHistory();
    transaction = {
      date: new Date(2012, 1, 1),
      amount: 100,
      balance: 1000,
    };
  });

  describe('transactions', () => {
    it('is created with no transactions', () => {
      expect(transactionHistory.transactions).toEqual([]);
    });
  });

  describe('addTransaction', () => {
    it('can add a transaction to an array', () => {
      transactionHistory.add(transaction);
      expect(transactionHistory.transactions).toEqual([transaction]);
    });
  });
});
