const Statement = require('../lib/Statement');

describe('Statement', () => {
  let statement;
  let transactionHistory;
  const oldLog = console.log;

  beforeEach(() => {
    statement = new Statement();

    transactionHistory = {
      transactions: {
        amount: 1000,
        balance: 1000,
        date: new Date(2012, 1, 10),
      },
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
  });
});
