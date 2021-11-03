let calculatedCelsius = 0;
let calculatedFarenheit  = 0;
const ftoc = function(farenheit) {
  calculatedCelsius = (farenheit-32)*(5/9);
  return Math.round(calculatedCelsius * 10) / 10;
};

const ctof = function(celsius) {
  calculatedFarenheit = (celsius * (9/5)) + 32;
  return Math.round(calculatedFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
