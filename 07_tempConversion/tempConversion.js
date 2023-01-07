const convertToCelsius = function(fahrenheit) {
  let fToCel = (fahrenheit - 32) * 5 / 9;
  return Math.round(fToCel * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let cToFahr = celsius * 9 / 5 + 32;
  return Math.round(cToFahr * 10) / 10
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
