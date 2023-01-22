import { FinanceTransactionEntity } from '../../entities';
import FinanceTransactionRepository from '../FinanceTransactionRepository';

describe('Name of the group', () => {
  describe('find without filters', () => {
    describe('empty data', () => {
      const data: FinanceTransactionEntity[] = [];

      test('should ', () => {
        const repository = new FinanceTransactionRepository(data);

        expect(repository.find()).toEqual([]);
      });
    });

    describe('with data', () => {
      const data: FinanceTransactionEntity[] = [
        {
          id: '1',
          date: new Date('01/01/2022'),
          concept: 'Transferencia bancaria',
          movement: 'Alquiler',
          amount: -1500,
          notes: 'ALQUILER ENERO',
        },
        {
          id: '2',
          date: new Date('02/01/2022'),
          concept: 'Pago con tarjeta',
          movement: 'Supermercado',
          amount: -100,
          notes: 'COMPRAS SEMANALES',
        },
        {
          id: '3',
          date: new Date('05/01/2022'),
          concept: 'Ingreso',
          movement: 'Nómina',
          amount: 3000,
          notes: 'SALARIO ENERO',
        },
      ];

      test('should ', () => {
        const repository = new FinanceTransactionRepository(data);

        expect(repository.find()).toEqual(data);
      });
    });
  });
});
