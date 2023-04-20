import merge from './merge';

describe('merge function', () => {
    it('should merge two empty collections', () => {
        const result = merge([], []);
        expect(result).toEqual([]);
    });

    it('should merge an empty collection with a non-empty collection', () => {
        const result = merge([], [1, 2, 3]);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should merge two non-empty collections with the correct order', () => {
        const result = merge([1,3,5], [2,4,6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should merge two non-empty collections with different length', () => {
        const result = merge([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should merge two non-empty collections with duplicate values', () => {
        const result = merge([1, 2, 3, 4], [1, 1, 3, 4]);
        expect(result).toEqual([1, 1, 1, 2, 3, 3, 4, 4]);
    });

});