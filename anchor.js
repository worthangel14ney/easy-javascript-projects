const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const allResults = await Promise.all(items.map(async (item) => {}));