# Easy Personal Finance
Simple, friendy and powerful engine to manage personal finances easily. Great tool to be used by web apps or cli apps.

<p align="center">
  <a href="https://github.com/smarcilla/easy-personal-finance/releases"><img src="https://badgen.net/github/release/smarcilla/easy-personal-finance" alt="Latest release" /></a>
  <a><img src="https://badgen.net/github/prs/smarcilla/easy-personal-finance" alt="Pull request"/></a>
</p>

## Installation
Use [npm](https://docs.npmjs.com/downloading-and-installing-packages-locally) package manager to install Easy Personal Finance

```shell
npm install easy-personal-finance
npm install easy-personal-finance@latest
```

## Usage
In this moment this library offers two components (transactions & reports "new in version 3.1.0")
To instance library
```ts
import { EasyFinance } from 'easy-personal-finance'
```
### Transactions component usage
If we want to use the library to get the transactions from a FormData object used in to upload files in an http request then we could use the library as follows. 
```ts
const transactionsDraft = new EasyFinance()
  .transactions
  .withType('form-data')
  .withData({
    body: req.body,
    contentTypeHeader: req.headers['content-type']!,
  })
  .build()
  .find({ text: searchParam })
```
- **req:** Request object using [Nextjs Api](https://nextjs.org/docs/api-routes/introduction) as a library client.
- **form-data**: Indicates the type of source from which the financial data comes from.
- **searchParam:** Search string entered by the user to search for specific transactions.
More examples [watching test](https://github.com/smarcilla/easy-personal-finance/blob/main/src/__tests__/finance.usecase.transactions.find.test.ts)

#### Format valid files
Json format file
```json
[
  {
    "date": "01/01/2022",
    "concept": "Transferencia bancaria",
    "movement": "Alquiler",
    "amount": "-1500",
    "notes": "ALQUILER ENERO o no"
  },
  {
    "date": "02/01/2022",
    "concept": "Pago con tarjeta",
    "movement": "Supermercado",
    "amount": "-100",
    "notes": "COMPRAS SEMANALES"
  },
  {
    "date": "05/01/2022",
    "concept": "Ingreso",
    "movement": "Nómina",
    "amount": "3000",
    "notes": "SALARIO ENERO"
  }
]
```
Csv format file
```csv
;Fecha;F.Valor;Concepto;Movimiento;Importe;Divisa;Disponible;Divisa;Observaciones;;;;Total ingresos;Total Gastos;Resultado
;31/01/2023;29/01/2023;ventas.com;Pago con tarjeta;-16.41;EUR;24800.46;EUR;4940197132993006 ventas.xom*1O3Y69XQ4;;;;2471.43;-2762.98;-291.55
;31/01/2023;31/01/2023;Cargo por amortizacion de prestamo/credito; ;-700.83;EUR;4816.87;EUR;9132-1528-57-0230106506;;;;;;
;30/01/2023;30/01/2023;Abono de nómina;"MyEmpresa; S.L";2380.43;EUR;25153.7;EUR;"MyEmpresa; S.L";;;;;;
```
### Reports component usage
If you want to get a balance sheet report calculated from a set of transactions then you have to do the following.
```ts
  async getBalance() {
    const financeEntities = await this.service.getTransactions()

    const reportService = new EasyFinance().reports
      .withType('balance')
      .withData(financeEntities)
      .build() as BalanceSheetService

    return reportService.calculateReport()
  }
``` 
- **financeEntities:** represents the set of transactions to be usd to calculate report.
- **.reports.:** path to use reports component
- **'balance' type:** indicates that the report to be generated should be a balance report.
- **calculateReport:** method responsable to calculate report.
