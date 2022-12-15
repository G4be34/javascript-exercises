const convertToCelsius = function(num) {
  let cel = num;
  let newCel = (cel-32)*(5/9);
  if (newCel == 0) {
    return 0
  } else {
  let endCel = newCel.toFixed(1);
  return parseFloat(endCel);
};

};

const convertToFahrenheit = function(num) {
  let far = num;
  let newFar = (far*(9/5) +32);
  if (newFar == 0) {
    return 0
  } else {
  let endFar = newFar.toFixed(1);
  return parseFloat(endFar);
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
