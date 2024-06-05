const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const uniqueArray = arr => [...new Set(arr)];