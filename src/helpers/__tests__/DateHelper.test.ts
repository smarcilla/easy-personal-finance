import { default as DateHelper } from '../DateHelper';

describe('DateHelper', () => {
  describe('parseDate', () => {
    let dateDraft: string;

    describe('when date is in spanish format', () => {
      beforeEach(() => {
        dateDraft = '30/01/2023';
      });

      test('should return expected date', () => {
        expect(new DateHelper(dateDraft).parseDate()).toEqual(new Date('2023-01-30T00:00:00.000Z'));
      });
    });
  });
});
