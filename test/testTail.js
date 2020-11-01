const tail = require('../tail');
const assert = require('chai').assert;

it('should return true', () => {
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
});
