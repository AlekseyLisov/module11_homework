import {sum} from '../index.js';

describe(
    "test index-1",
    () => {
    it('adds 1 + 2 to equal 3', () => {
        const result1 = sum (1,2);
        expect(result1).toBe(3);
    });
});
