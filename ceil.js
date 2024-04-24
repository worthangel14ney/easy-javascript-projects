const isEmptyObject = obj => Object.keys(obj).length === 0;
var pattern = {};
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);