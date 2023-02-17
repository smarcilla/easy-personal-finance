/**
 * Try to test find transactions use case
 */

import { EasyFinance } from '../index';
import data from '../data/jsonFinanceData.mock.json';

jest.mock('../helpers');

describe('find transactions', () => {
  describe('when data comes from json data type', () => {
    test('should ', () => {
      expect(
        new EasyFinance().transactions
          .withType('json-data')
          .withData(data)
          .build()
          .find()
      ).toEqual([
        {
          amount: -1500,
          concept: 'Transferencia bancaria',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'x2PIGpCxRHgeQzOW8sChUDlvQEm/VSsH+NIoGo2eQqo=',
          movement: 'Alquiler',
          notes: 'ALQUILER ENERO',
          type: 'expense'
        },
        {
          amount: -100,
          concept: 'Pago con tarjeta',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'SDT2eCUOzQOguWOoUFNVW5C9LnoMsfWBFsyOtW74SlU=',
          movement: 'Supermercado',
          notes: 'COMPRAS SEMANALES',
          type: 'expense'
        },
        {
          amount: 3000,
          concept: 'Ingreso',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'UKloix/6t9ziV82V2RA0zcgG2/f5Z3981hywLnovo80=',
          movement: 'Nómina',
          notes: 'SALARIO ENERO',
          type: 'income'
        }
      ]);
    });

    test('should ', () => {
      expect(
        new EasyFinance().transactions
          .withType('json-data')
          .withData(data)
          .build()
          .find({ text: 'Supermercado' })
      ).toEqual([
        {
          amount: -100,
          concept: 'Pago con tarjeta',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'SDT2eCUOzQOguWOoUFNVW5C9LnoMsfWBFsyOtW74SlU=',
          movement: 'Supermercado',
          notes: 'COMPRAS SEMANALES',
          type: 'expense'
        }
      ]);
    });
  });
});
