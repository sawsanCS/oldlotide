const assertEquals = function(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log(`💯 💯 💯 true`);
    return true;
  }
  return false;
  
 
};
const assertArraysEquals = function(arr1, arr2) {
  if (assertEquals(arr1, arr2)) {
    console.log("the two arrays are identical");
  } else {
    console.log("the two arrays are not identical");
  }
};
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ")
      results[sentence[i]] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ")
      results[sentence[i]].push(i);
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
let res = letterPositions("lighthouse in the house");
console.log(assertEquals(res, { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20],  s: [8, 21], e: [9, 16, 22],
  n: [12]}));
console.log(assertArraysEquals(res["i"], [1, 11, 13]));
