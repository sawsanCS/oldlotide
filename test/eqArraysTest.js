const eqArray = require('../eqArrays');
const assert = require('assert')

it('should return true', () => {
  assert.equal(eqArray([10,21,3], [10,21,3]), true)
});
