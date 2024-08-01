const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isTabInView = () => !document.hidden;
const toggleBool = () => (bool = !bool);