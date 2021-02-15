const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { rgbToHex };
