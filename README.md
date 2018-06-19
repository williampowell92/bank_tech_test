# Bank Tech Test

A CLI application for managing a banking account.

### Motivation

This project has been created as part of my journey as a junior developer at Makers Academy.

### Class Diagram

![class diagram](https://i.imgur.com/lskgXJG.png)

### Features

- Clients can create individual accounts.
- Clients can make deposits and withdrawals, and have them saved in their account history with the date and balance at time of transaction.
- Clients can print a statement of all of their past transactions.

### Installation

This application was developed in Javascript using Node.js. Anyone wishing to use this application should install Node.js from their website, and then download and install the application as follows:

```
$ git clone git@github.com:williampowell92/bank_tech_test.git
$ npm install
```

### How to use?

The application is designed to be run from a REPL, such as Node.

Once you have downloaded Node and the application it can be run using the Node REPL. An example use case can be seen below:

```
$ node
> const Account = require('./lib/Account');
> account = new Account();
> account.deposit(1000, new Date(2012, 0, 10));
> account.deposit(2000, new Date(2012, 0, 13));
> account.withdraw(500, new Date(2012, 0, 14));
> account.printStatement();
```

The output for this would be:

```
date || credit || debit || balance
10/01/2012 || 1000.00 || || 1000.00
13/01/2012 || 2000.00 || || 3000.00
14/01/2012 || || 500.00 || 2500.00
```

Note: if no date is given in deposits or withdrawals, the current date will be used.

### Tests

Testing was carried out using the Jasmine Node.js module. It will be downloaded when the program is installed. Tests can be run from the project home directory as follows:

```
$ jasmine
```

### Technologies

This application was built using Javascript, Node.js and Jasmine.
