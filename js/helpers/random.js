const random = (...values) => {
  return values[Math.floor(Math.random() * values.length)];
};
export default random;
