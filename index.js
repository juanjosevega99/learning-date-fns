const format = require('date-fns/format');
const subDays = require('date-fns/subDays');
const subMonths = require('date-fns/subMonths');
const formatDistance = require('date-fns/formatDistance');
const { startOfMonth, endOfMonth } = require('date-fns');
const es = require('date-fns/locale/es');

const today = new Date();
const todayFormat = format(today, 'yyyy/MM/dd');

console.log('🚀 ~ file: index.js ~ line 5 ~ todayFormat', todayFormat);
console.log(formatDistance(new Date(2021, 1, 1), today));

const filters = [
  {
    label: 'Last 3 days',
    startAt: format(subDays(today, 3), 'yyyy-MM-dd'),
    endAt: todayFormat
  },
  {
    label: 'Last 7 days',
    startAt: format(subDays(today, 7), 'yyyy-MM-dd'),
    endAt: todayFormat
  },
  {
    label: 'Last 28 days',
    startAt: format(subDays(today, 28), 'yyyy-MM-dd'),
    endAt: todayFormat
  },
  {
    label: 'Last 90 days',
    startAt: format(subDays(today, 90), 'yyyy-MM-dd'),
    endAt: todayFormat
  }
];

for (let index = 1; index <= 3; index++) {
  const monthPrev = subMonths(today, index);
  filters.push({
    label: format(monthPrev, 'MMMM', { locale: es }),
    startAt: format(startOfMonth(monthPrev), 'yyyy-MM-dd'),
    endAt: format(endOfMonth(monthPrev), 'yyyy-MM-dd')
  });
  console.log(format(monthPrev, 'MMMM'));
}

console.log(filters);
