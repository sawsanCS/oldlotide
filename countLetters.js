const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`💯 💯 💯 true`);
  } else {
    console.log(`😖 😖 😖 assertion failed`);
  }
};
const countLetters = function(s) {
  let obj = {};
  for (let letter of s) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  
  return obj;
};
console.log(countLetters("salma is happy"));
console.log(assertEqual(countLetters("salma is happy"), { s: 2, a: 3, l: 1, m: 1, ' ': 2, i: 1, h: 1, p: 2, y: 1 }
));
