function parseCarNames(input) {
  return input
    .split(',')
    .map((name) => name.trim())
    .filter((name) => name !== '');
}

export default parseCarNames;
