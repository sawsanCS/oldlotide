const eqArrays =function (arr1, arr2) {
  let equality = true;
  let i = 0;
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    while (i < arr1.length){
      if (arr1[i] !== arr2[i]){
        equality =false;
      }
      i++;
    }

  }
    return equality;
};
const assertEqual = function (value, v){
  if (value === v){
    return true;
  }
  else { console.log ('the two arrays are not equal')}
  
}
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
