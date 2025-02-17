// вспомогательные функции

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }

  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export { createIdGenerator, getRandomInteger, getRandomArrayElement };
