const uniqueArray = arr => [...new Set(arr)];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);