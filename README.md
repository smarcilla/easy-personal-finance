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

### when data comes from FormData object

This use case is when an web app uses POST http request to upload files. 

```javascript
  
  const transactionsDraft = new EasyFinance()
  .transactions
    .withType('form-data')
    .withData({
      body: req.body,
      contentTypeHeader: 'multipart/form-data; boundary=----WebKitFormBoundaryIj0be7AgrZ4BV1cq',
    })
    .build()
    .find()
```

- File formats supported are json & csv
```
Content-Disposition: form-data; name="uploads[]"; filename="somebinary.dat"
Content-Type: 'application/json' | 'text/csv'
```

### when origin comes from json data (memory origin)

This use case es when client app can transform origin data to JsonFinanceData[] format.

### data type
```javascript
interface JsonFinanceData {
  date: string;
  concept: string;
  movement: string;
  notes: string;
  amount: string;
}
```

```javascript
const transactions = new EasyFinance()
  .transactions    
    .withType('json-data')                                                
    .withData(data)
    .build()
    .find();
```
you can watch more examples related with this use case here [use case demo using jest](https://github.com/smarcilla/easy-personal-finance/blob/main/src/__tests__/finance.usecase.transactions.find.test.ts)