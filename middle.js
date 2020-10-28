const eqArrays = function(arr1, arr2) {
  let i = 0;
  if (arr1.length !== arr2.length) {
    return false;
  }
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    i++;
  }
  return true;
};
const assertArraysEquals = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log("the two arrays are not identical");
  } else {
    console.log("the two arrays are identical");
  }
};
const middle = function(arr) {
  let newArr = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr[(arr.length / 2) - 1]);
    newArr.push(arr[(arr.length / 2)]);
    return newArr;
  }
  if (arr.length % 2 === 1) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
    return newArr;
  }
};

const a = [1973, 1985, 2013, 2015, 2017];
console.log(middle(a));
console.log(assertArraysEquals(a, middle(a)));
