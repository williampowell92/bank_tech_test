const TransactionHistory = require('../lib/TransactionHistory');

describe('TransactionHistory', () => {
  let transactionHistory;
  let transaction;
  let differentTransaction;

  beforeEach(() => {
    transactionHistory = new TransactionHistory();
    transaction = {
      date: new Date(2012, 1, 1),
      amount: 100,
      balance: 1000,
    };
    differentTransaction = {
      date: new Date(2018, 3, 7),
      amount: -500,
      balance: 3000,
    };
  });

  describe('transactions', () => {
    it('is created with no transactions', () => {
      expect(transactionHistory.transactions).toEqual([]);
    });
  });

  describe('addTransaction', () => {
    it('can add a transaction to transactions', () => {
      transactionHistory.add(transaction);
      expect(transactionHistory.transactions).toEqual([transaction]);
    });

    it('can add a different transaction to transactions', () => {
      transactionHistory.add(differentTransaction);
      expect(transactionHistory.transactions).toEqual([differentTransaction]);
    });
  });
});
