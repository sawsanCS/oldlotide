const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("💯 💯 💯 true");
    return true;
  } else {
    console.log("😖 😖 😖 assertion failed");
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 15);