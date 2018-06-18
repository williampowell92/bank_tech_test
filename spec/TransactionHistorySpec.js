const TransactionHistory = require('../lib/TransactionHistory');

describe('TransactionHistory', () => {
  let transactionHistory;
  let amount;
  let balance;
  let date;

  beforeEach(() => {
    function MockTransaction(...args) {
      this.arguments = args;
    }
    transactionHistory = new TransactionHistory(MockTransaction);
    amount = 100;
    balance = 1000;
    date = new Date(2012, 1, 1);
  });

  describe('transactions', () => {
    it('is created with no transactions', () => {
      expect(transactionHistory.transactions).toEqual([]);
    });
  });

  describe('addTransaction', () => {
    it('adds an object into transactions', () => {
      transactionHistory.add(amount, balance, date);

      expect(transactionHistory.transactions.length).toEqual(1);
    });

    it('creates an instance of a transaction object', () => {
      transactionHistory.add(amount, balance, date);

      expect(transactionHistory.transactions[0].__proto__.constructor.name).toEqual('MockTransaction');
    });

    it('adds multiple object into transactions', () => {
      transactionHistory.add(amount, balance, date);
      transactionHistory.add(amount, balance, date);

      expect(transactionHistory.transactions.length).toEqual(2);
    });

    it('creates another instance of a transaction object', () => {
      transactionHistory.add(amount, balance, date);
      transactionHistory.add(amount, balance, date);

      expect(transactionHistory.transactions[1].__proto__.constructor.name).toEqual('MockTransaction');
    });

    it('creates an instance of transaction with correct arguments', () => {
      transactionHistory.add(amount, balance, date);

      expect(transactionHistory.transactions[0].arguments).toEqual([amount, balance, date]);
    });
  });
});
