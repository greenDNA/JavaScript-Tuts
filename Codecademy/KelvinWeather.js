//forecast for today is 293 Kelvin
const kelvin = 293; //what if 0 Kelvin?
// celsius is equal to kelvin subtract 273
var celsius = kelvin - 273;
// formula for converting celsius to fahrenheit
// use Math.floor to round down to an integer value
var fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
var newton = Math.floor(celsius * (33/100));

console.log(`The temperature in Newton is ${newton}.`);
