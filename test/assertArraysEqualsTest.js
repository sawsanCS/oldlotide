const eq = require ('../assertArraysEquals');
const assert = require('assert');
it ("should return true if the two arrays are equals", function(){
assert.equal(eq([1, 2], [1, 2]), "identical");
});