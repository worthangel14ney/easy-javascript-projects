const randomString = () => Math.random().toString(36).slice(2);
var c = new Counter(); c.add(); c.add(); c.add();
const uniqueArr = (arr) => [...new Set(arr)];