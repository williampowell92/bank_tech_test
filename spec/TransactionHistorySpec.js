const TransactionHistory = require('../lib/TransactionHistory');

describe('TransactionHistory', () => {
  let transactionHistory;
  let transaction;
  let differentTransaction;

  beforeEach(() => {
    function MockTransaction() {}
    transactionHistory = new TransactionHistory(MockTransaction);
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
    it('adds an object into transactions', () => {
      transactionHistory.add(100, 1000, new Date(2012, 1, 1));

      expect(transactionHistory.transactions.length).toEqual(1);
    });

    it('creates an instance of a transaction object', () => {
      transactionHistory.add(100, 1000, new Date(2012, 1, 1));

      expect(transactionHistory.transactions[0].__proto__.constructor.name).toEqual('MockTransaction');
    });

    it('adds multiple object into transactions', () => {
      transactionHistory.add(100, 1000, new Date(2012, 1, 1));
      transactionHistory.add(100, 1000, new Date(2012, 1, 1));

      expect(transactionHistory.transactions.length).toEqual(2);
    });
  });
});
