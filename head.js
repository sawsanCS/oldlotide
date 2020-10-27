const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯 💯 💯 true`);
    return true;
  } else {
    console.log(`😖 😖 😖 assertion failed`);
  }
};
const head = function (arr ){
  if (arr.length === 0) return false;
  else 
  return (arr[0]);

};
// TEST CODE
console.log(head([10,21,3]));
console.log(assertEqual(head[10,21,3]), 10);

