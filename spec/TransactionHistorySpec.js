const TransactionHistory = require('../lib/TransactionHistory');

describe('TransactionHistory', () => {
  let transactionHistory;

  beforeEach(() => {
    transactionHistory = new TransactionHistory();
  });

  describe('transactions', () => {
    it('is created with no transactions', () => {
      expect(transactionHistory.transactions).toEqual([]);
    });
  });
});
