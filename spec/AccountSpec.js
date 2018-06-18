const Account = require('../lib/Account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('balance', () => {
    it('is created with a balance of 0', () => {
      expect(account.balance).toEqual(0);
    });
  });
});
