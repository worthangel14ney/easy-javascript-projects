const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const getRandomBoolean = () => Math.random() >= 0.5;
console.log(+"1" +  "1" + "2");
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;