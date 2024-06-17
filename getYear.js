const timeFromDate = date => date.toTimeString().slice(0, 8);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const fullName = name || 'buddy';