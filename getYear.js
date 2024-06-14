const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const result = await makeHttpRequest(url);