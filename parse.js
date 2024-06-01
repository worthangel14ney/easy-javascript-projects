const isEmptyObject = obj => Object.keys(obj).length === 0;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const merge = (a, b) => [...a, ...b];