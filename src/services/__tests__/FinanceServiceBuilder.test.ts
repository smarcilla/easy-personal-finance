import { FinanceServiceBuilder } from '../FinanceServiceBuilder';

describe('FinanceServiceBuilder', () => {
  let builder: FinanceServiceBuilder;

  beforeEach(() => {
    builder = new FinanceServiceBuilder();
  });

  test('should ', () => {
    expect(builder).toBeDefined();
  });
  test('should ', () => {
    expect(builder.withEntity).toBeDefined();
  });

  test('should ', () => {
    expect(builder.build).toBeDefined();
  });

  describe('withEntity', () => {
    test('should ', () => {
      expect(builder.withEntity('report')).toEqual(builder);
    });
  });
});
