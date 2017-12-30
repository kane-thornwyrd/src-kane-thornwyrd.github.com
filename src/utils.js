export default {
  ucFirst: string => string.charAt(0).toUpperCase() + string.slice(1),
  fastHash: string => string.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0),
};
