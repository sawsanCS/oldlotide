const head = require('../head');
const assert = require('chai').assert;

it('should return true', () => {
  assert.equal(head([10,21,3]), 10)
});
