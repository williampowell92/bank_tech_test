[Motivation](### Motivation) | [Approach](### Approach)

# Bank Tech Test

A CLI application for managing a banking account.

### Motivation

This project has been created as part of my journey as a junior developer at Makers Academy.

### Specification

#### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Class Diagram

![class diagram](https://i.imgur.com/lskgXJG.png)

### Approach

The class diagram above was created at the start of the project to give an overarching plan. To guide the development of the application a feature test matching the acceptance criteria was written early on in the project. The application was then developed using test driven design.

It was decided to use the constructor, prototype Javascript design pattern to allow the application to built in an object-orientated manner.

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

### Further work

- Errors for checking if the client withdraws below 0 balance.
- Overdraft limits allowing the client to withdraw a certain amount below 0 balance.
- Filtering of transaction history by date.

### Technologies

This application was built using Javascript, Node.js and Jasmine.
