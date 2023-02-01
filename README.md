<h2 align="center"> Easy Personal Finance</h2>
<p align="center">
    Simple, friendy and powerful engine to manage personal finances easily. Great tool to be used by web apps or cli apps.
</p>
<p align="center">
  <a href="https://github.com/smarcilla/easy-personal-finance/releases"><img src="https://badgen.net/github/release/smarcilla/easy-personal-finance" alt="Latest release" /></a>
  <a><img src="https://badgen.net/github/prs/smarcilla/easy-personal-finance" alt="Pull request"/></a>
</p>

## Getting started
If you want to use this library you can start installing it in your repo
```shell
npm install easy-personal-finance
````
or you can install the last version using
```shell
npm install easy-personal-finance@latest
```

## Usage examples

### find transactions use case
```javascript
const transactions:FinanceTransactionEntity[] = new EasyFinance()
                                                    .transactions
                                                    .withOrigin('memory')
                                                    .withData(data)
                                                    .build()
                                                    .find();
```
you can watch more examples related with this use case here [use case demo using jest](https://github.com/smarcilla/easy-personal-finance/blob/main/src/__tests__/finance.usecase.transactions.find.test.ts)