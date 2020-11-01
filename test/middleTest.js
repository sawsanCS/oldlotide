const mid = require('../middle');
const assert = require('assert')

it('should return true', () => {
  assert.deepEqual(mid([10,21,3, 4]), [21,3])
});
