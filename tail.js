const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    return Array.isArray(actual) &&
    Array.isArray(expected) &&
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);
  } else {
    if (actual === expected) {
      console.log(`💯 💯 💯 true`);
      return true;
    } else {
      console.log(`😖 😖 😖 assertion failed`);
    }
  }
};
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));
