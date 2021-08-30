const format = require('date-fns/format');

const today = new Date();
const todayFormat = format(today, 'yyyy/MM/dd');
console.log("🚀 ~ file: index.js ~ line 5 ~ todayFormat", todayFormat)
