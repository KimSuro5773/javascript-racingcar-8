function parseCarName(input) {
  return input
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name !== '');
}

export default parseCarName;
