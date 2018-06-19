/* eslint no-global-assign: 0 */

const Account = require('../../lib/Account');

describe('printing balance history', () => {
  let account;
  const oldConsole = console;
  let consoleLogHistory;

  beforeEach(() => {
    account = new Account();

    consoleLogHistory = [];
    console = {
      log() {},
    };
    spyOn(console, 'log').and.callFake((...args) => {
      consoleLogHistory.push(args);
    });
  });

  afterEach(() => {
    console = oldConsole;
    consoleLogHistory = [];
  });

  it('prints correct balance history', () => {
    const expectedArguments = [
      ['date || credit || debit || balance'],
      ['14/01/2012 || || 500.00 || 2500.00'],
      ['13/01/2012 || 2000.00 || || 3000.00'],
      ['10/01/2012 || 1000.00 || || 1000.00'],
    ];
    account.deposit(1000, new Date(2012, 0, 10));
    account.deposit(2000, new Date(2012, 0, 13));
    account.withdraw(500, new Date(2012, 0, 14));
    account.printStatement();

    expectedArguments.forEach((expectedArgument, index) => {
      expect(consoleLogHistory[index]).toEqual(expectedArgument);
    });
  });
});
