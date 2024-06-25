const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const merge = Object.assign({}, obj1, obj2);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;