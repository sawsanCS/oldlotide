const assertEqual = function(actual,expected) {
  if (expected === undefined || actual !== expected) {
    console.log(`😖 😖 😖 assertion failed`);
  } else  {
    console.log(`💯 💯 💯 true`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  let count;
 
  for (const myItem in itemsToCount) {
    if (itemsToCount[myItem] === true) {
      count = 0;
      for (let itemArr of allItems) {
        if (itemArr === myItem) {
          count++;
        }
      }
      if (count > 0) {
        obj[myItem] = count;
      }
    }
  }
  return obj;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
