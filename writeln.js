[foo, bar] = [bar, foo];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
console.log(+"1" +  "1" + "2");