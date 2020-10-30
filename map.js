const words = ["ground", "control", "to", "major", "tom"];
/*const results1 = words.map(word => word[0]);
console.log(results1);*/
/*const map = function(array, callback) {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  return results;
}
console.log(map(words, words.map(x =>x[0])));*/
const eqArrays = function(arr1, arr2) {
  
  let i = 0;
  if (arr1.length !== arr2.length) {
    return false;}
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
      i++;
    }
  
  return true;
};
const assertArraysEquals = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log ("the two arrays are identical");
  } else {
    console.log("the two arrays are not identical");
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
console.log(map(words, word => word[0]))
assertArraysEquals("item BEFORE:","ground", "item AFTER:",  "g", "---", "item BEFORE:",  "control",
"item AFTER:",  "c",
"---",
"item BEFORE:",  "to",
"item AFTER:",  "t",
"---",
"item BEFORE:",  "major",
"item AFTER:",  "m",
"---",
"item BEFORE:",  "tom",
"item AFTER:",  "t",
"---", map(words, word => word[0]));