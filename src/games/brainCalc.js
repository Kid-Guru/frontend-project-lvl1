import { generateNumber } from '../cli.js';

const generateSymbol = (symbols) => {
  const symbolsCount = symbols.length - 1;
  const randomIndex = generateNumber(0, symbolsCount);
  return symbols[randomIndex];
};

const getCorrectAnswer = (num1, num2, symbol) => {
  switch (symbol) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const gameRule = 'What is the result of the expression?';

const makeBrainCalc = () => {
  const symbol = generateSymbol(['+', '-', '*']);
  const num1 = generateNumber(1, 30);
  const num2 = generateNumber(1, 30);
  const question = `${num1} ${symbol} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2, symbol).toString();

  return [question, correctAnswer];
};

export { gameRule, makeBrainCalc };
