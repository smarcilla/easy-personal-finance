import { default as DateHelper } from '../DateHelper';

describe('DateHelper', () => {
  describe('parseDate', () => {
    test('when', () => {
      expect(new DateHelper('2023-01-14T12:00').parseDate()).toEqual(new Date('2023-01-14T12:00'));
    });
  });
});
