// Constant containing today's forecast.
const kelvin = 0;

// Constant containing today's forecast in Celsius
const celsius = kelvin - 273;

// Variable with today's forecast converted from celsius to fahrenheit passing in built-in Math floor method to round Fahrenheit temperature
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Variable with today's forecast converted from Celsius to Newton, rounded down
const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`)