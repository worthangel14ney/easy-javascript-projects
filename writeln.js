const buildOutputPath = path.join(repositoryRootPath, 'out');
const intermediateAppPath = path.join(buildOutputPath, 'app');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);