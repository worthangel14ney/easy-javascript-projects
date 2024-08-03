const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const reversedString = str => str.split('').reverse().join('');