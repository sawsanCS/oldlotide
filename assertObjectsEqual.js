const eqArrays = function(arr1, arr2) {
  
  let i = 0;
  if (arr1.length !== arr2.length) {
    return false; }
 
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      i++;
    }
    return true;
 
};
const assertEqual = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let c in obj1) {
      if (!eqArrays(obj1[c],obj2[c]) || !Object.keys(obj2).includes(c)) {
        return false;
      }
    }
  
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (assertEqual(obj1, obj2) && assertEqual(obj2, obj1)) {
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!;
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)){
    console.log (`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
  else {
    console.log (`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);

  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqArrays(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log(assertObjectsEqual(cd, cd2));