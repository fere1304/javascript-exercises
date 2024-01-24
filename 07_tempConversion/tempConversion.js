// tempConversion.js

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10; // Round to 1 decimal place
}

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10; // Round to 1 decimal place
}

module.exports = { convertToCelsius, convertToFahrenheit };
