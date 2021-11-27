// a filter takes an input and produces an output
const removeEverySecondCharacter = (value) => {
  let result = value ? value.toString() : '';

  result = result.split('').filter((item, idx) => idx % 2 === 0);
  result = result.join('');

  return result;
};

export default removeEverySecondCharacter;
