const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const results = await Promise.all(resultingPromises);