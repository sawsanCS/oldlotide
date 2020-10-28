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
const without = function(arr1, arr2) {
  let finalArr = [];
  if (eqArrays(arr1, arr2)) {
    return finalArr;
  }
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      finalArr.push(element);
    }
  }
  return finalArr;
};
const words = ["hello", "world", "lighthouse"];
const newWords = without(words, ["lighthouse"]);
assertArraysEquals(newWords, ["hello", "world", "lighthouse"]);