var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const resultingPromises = urls.map((url) => makHttpRequest(url));