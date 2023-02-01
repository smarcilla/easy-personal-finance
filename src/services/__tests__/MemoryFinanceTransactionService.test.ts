import { MemoryFinanceTransactionService } from '../MemoryFinanceTransactionService';
import data from '../../data/jsonFinanceData.mock.json';

jest.mock('../../helpers');

describe('MemoryFinanceTransactionService', () => {
  let memoryFinanceTransactionService: MemoryFinanceTransactionService;

  beforeEach(() => {
    memoryFinanceTransactionService = new MemoryFinanceTransactionService({ data });
  });

  test('', () => {
    expect(memoryFinanceTransactionService).toBeDefined();
  });

  test('should ', () => {
    expect(memoryFinanceTransactionService.find).toBeDefined();
  });

  describe('when find method', () => {
    test('should return all finance transactions', () => {
      expect(memoryFinanceTransactionService.find().length).toBe(3);
    });

    test('should ', () => {
      expect(memoryFinanceTransactionService.find()).toEqual([
        {
          amount: -1500,
          concept: 'Transferencia bancaria',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'x2PIGpCxRHgeQzOW8sChUDlvQEm/VSsH+NIoGo2eQqo=',
          movement: 'Alquiler',
          notes: 'ALQUILER ENERO',
          type: 'expense',
        },
        {
          amount: -100,
          concept: 'Pago con tarjeta',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'SDT2eCUOzQOguWOoUFNVW5C9LnoMsfWBFsyOtW74SlU=',
          movement: 'Supermercado',
          notes: 'COMPRAS SEMANALES',
          type: 'expense',
        },
        {
          amount: 3000,
          concept: 'Ingreso',
          date: new Date('2022-04-30T22:00:00.000Z'),
          id: 'UKloix/6t9ziV82V2RA0zcgG2/f5Z3981hywLnovo80=',
          movement: 'Nómina',
          notes: 'SALARIO ENERO',
          type: 'income',
        },
      ]);
    });

    describe('when filter', () => {
      test('with text undefined', () => {
        expect(memoryFinanceTransactionService.find({})).toEqual([
          {
            amount: -1500,
            concept: 'Transferencia bancaria',
            date: new Date('2022-04-30T22:00:00.000Z'),
            id: 'x2PIGpCxRHgeQzOW8sChUDlvQEm/VSsH+NIoGo2eQqo=',
            movement: 'Alquiler',
            notes: 'ALQUILER ENERO',
            type: 'expense',
          },
          {
            amount: -100,
            concept: 'Pago con tarjeta',
            date: new Date('2022-04-30T22:00:00.000Z'),
            id: 'SDT2eCUOzQOguWOoUFNVW5C9LnoMsfWBFsyOtW74SlU=',
            movement: 'Supermercado',
            notes: 'COMPRAS SEMANALES',
            type: 'expense',
          },
          {
            amount: 3000,
            concept: 'Ingreso',
            date: new Date('2022-04-30T22:00:00.000Z'),
            id: 'UKloix/6t9ziV82V2RA0zcgG2/f5Z3981hywLnovo80=',
            movement: 'Nómina',
            notes: 'SALARIO ENERO',
            type: 'income',
          },
        ]);
      });
      test('by amount ', () => {
        expect(memoryFinanceTransactionService.find({ text: '-100' })).toEqual([
          {
            amount: -100,
            concept: 'Pago con tarjeta',
            date: new Date('2022-04-30T22:00:00.000Z'),
            id: 'SDT2eCUOzQOguWOoUFNVW5C9LnoMsfWBFsyOtW74SlU=',
            movement: 'Supermercado',
            notes: 'COMPRAS SEMANALES',
            type: 'expense',
          },
        ]);
      });
    });
  });
});
