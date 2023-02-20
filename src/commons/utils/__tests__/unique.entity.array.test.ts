import { UniqueEntityArray } from '../..';

describe('UniqueEntityArray', () => {
  describe('when array has duplicated entities', () => {
    test('should return array without duplicated', () => {
      const result = new UniqueEntityArray([
        { id: '2', name: 'entity 2' },
        { id: '2', name: 'entity 2' },
        { id: '1', name: 'entity 1' },
        { id: '3', name: 'entity 3' },
        { id: '1', name: 'entity 1' }
      ]).items;

      expect(result).toEqual([
        { id: '2', name: 'entity 2' },
        { id: '1', name: 'entity 1' },
        { id: '3', name: 'entity 3' }
      ]);
    });
  });
});
