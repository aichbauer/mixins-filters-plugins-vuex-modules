// a filter takes an input and produces an output
const capitalize = (value) => {
  let result = value ? value.toString() : '';

  if (result) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};

export default capitalize;
