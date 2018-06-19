const Statement = require('../lib/Statement');

describe('Statement', () => {
  let statement;
  let transactionHistory;
  let differentTransactionHistory;
  const oldLog = console.log;

  beforeEach(() => {
    statement = new Statement();

    transactionHistory = {
      transactions: [{
        amount: 1000,
        balance: 1000,
        date: new Date(2012, 0, 10),
      }],
    };

    differentTransactionHistory = {
      transactions: [{
        amount: 2000,
        balance: 3000,
        date: new Date(2012, 0, 13),
      }],
    };

    console.log = jasmine.createSpy('log');
  });

  afterEach(() => {
    console.log = oldLog;
  });

  describe('print', () => {
    it('should print a title', () => {
      statement.print(transactionHistory);

      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
    });

    it('should print a transaction', () => {
      statement.print(transactionHistory);

      expect(console.log).toHaveBeenCalledWith('10/01/2012 || 1000.00 || || 1000.00');
    });

    it('should print a different transaction', () => {
      statement.print(differentTransactionHistory);

      expect(console.log).toHaveBeenCalledWith('13/01/2012 || 2000.00 || || 3000.00');
    });
  });
});
