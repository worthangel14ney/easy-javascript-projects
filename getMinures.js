console.log(1 +  +"2" + "2");
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const allResults = await Promise.all(items.map(async (item) => {}));
const scriptRootPath = path.join(repositoryRootPath, 'script');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};