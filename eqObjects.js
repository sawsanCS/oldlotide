const assertEqual = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const c in obj1) {
    if (obj1[c] !== obj2[c] || !Object.keys(obj2).includes(c)) {
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
