const eqArrays = function(arr1, arr2) {
  let equality = true;
  let i = 0;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        equality = false;
      }
      i++;
    }
  }
  return equality;
};
const assertArraysEquals = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("the two arrays are identical");
  } else {
    console.log("the two arrays are not identical");
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false)
assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1, 2, 3], [1, 2, 3, 4]);
