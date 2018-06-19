/* eslint no-global-assign: 0 */

const Statement = require('../lib/Statement');

describe('Statement', () => {
  let statement;
  let transactionHistory;
  let differentTransactionHistory;
  let multipleTransactionHistory;
  let negativeTransactionHistory;
  let differentNegativeTransactionHistory;
  const oldConsole = console;
  let consoleLogHistory;

  beforeEach(() => {
    statement = new Statement();

    consoleLogHistory = [];
    console = {
      log() {},
    };
    spyOn(console, 'log').and.callFake((...args) => {
      consoleLogHistory.push(args);
    });

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

    multipleTransactionHistory = {
      transactions: [{
        amount: 1000,
        balance: 1000,
        date: new Date(2012, 0, 10),
      },
      {
        amount: 2000,
        balance: 3000,
        date: new Date(2012, 0, 13),
      }],
    };

    negativeTransactionHistory = {
      transactions: [{
        amount: -500,
        balance: 2500,
        date: new Date(2012, 0, 14),
      }],
    };

    differentNegativeTransactionHistory = {
      transactions: [{
        amount: -2000,
        balance: -3000,
        date: new Date(2012, 0, 13),
      }],
    };
  });

  afterEach(() => {
    console = oldConsole;
    consoleLogHistory = [];
  });

  describe('print', () => {
    describe('single transactions', () => {
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

      it('should print a transaction with a negative amount', () => {
        statement.print(negativeTransactionHistory);

        expect(console.log).toHaveBeenCalledWith('14/01/2012 || || 500.00 || 2500.00');
      });

      it('should print a different transaction with a negative amount', () => {
        statement.print(differentNegativeTransactionHistory);

        expect(console.log).toHaveBeenCalledWith('13/01/2012 || || 2000.00 || -3000.00');
      });
    });

    describe('multiple transactions', () => {
      it('should print the first of multiple transactions', () => {
        statement.print(multipleTransactionHistory);

        expect(consoleLogHistory[1]).toEqual(['13/01/2012 || 2000.00 || || 3000.00']);
      });

      it('should print the second of multiple transactions', () => {
        statement.print(multipleTransactionHistory);

        expect(consoleLogHistory[2]).toEqual(['10/01/2012 || 1000.00 || || 1000.00']);
      });
    });
  });
});
