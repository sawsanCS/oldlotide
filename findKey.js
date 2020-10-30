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
const findKey = function (obj, callback) {
  for (const o in obj) {
    
    if(callback(obj[o])) {
      return o;
    
  }
} 
return "non existing"
}
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));
console.log(assertEqual (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'));
