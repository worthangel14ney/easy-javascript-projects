const isWeekday = (date) => date.getDay() % 6 !== 0;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';