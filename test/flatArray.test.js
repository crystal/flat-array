import assert from 'assert';

import flatArray from '../src/flatArray';

describe('flatArray', function () {
  it('should return flattened array', function () {
    const array = [[1, 2, [3]], 4];
    const result = flatArray(array);
    const expected = [1, 2, 3, 4];
    assert.strictEqual(result[0], expected[0], `${result[0]} does not equal ${expected[0]}`);
    assert.strictEqual(result[1], expected[1], `${result[1]} does not equal ${expected[1]}`);
    assert.strictEqual(result[2], expected[2], `${result[2]} does not equal ${expected[2]}`);
    assert.strictEqual(result[3], expected[3], `${result[3]} does not equal ${expected[3]}`);
  })
})
