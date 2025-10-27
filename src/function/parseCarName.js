function parseCarName(carNameString) {
  return carNameString
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name !== '');
}

export default parseCarName;
