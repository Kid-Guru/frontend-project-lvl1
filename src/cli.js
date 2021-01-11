import readline from 'readline-sync';

const generateNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export { readline, generateNumber };
