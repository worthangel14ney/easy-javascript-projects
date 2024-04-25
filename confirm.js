const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const uniqueArr = (arr) => [...new Set(arr)];
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isTabInView = () => !document.hidden;