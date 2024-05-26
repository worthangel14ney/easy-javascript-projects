var regexp  = new RegExp('{{([^}]+)}}', 'g');
const currentDate = () => new Date().toLocaleDateString('en-US');