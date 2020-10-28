const assertEqual = function(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
   
    return true;
  }
  return false;
};
const findKeyByValue = function(obj, value) {
 for (const o in obj) {
   if (obj[o] === value) {
     return o;
   }
 }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
