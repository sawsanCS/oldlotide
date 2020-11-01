const tail = require('../tail');
const assert = require('assert')

it('should return true', () => {
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
});
