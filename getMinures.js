const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};