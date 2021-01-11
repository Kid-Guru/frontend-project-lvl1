import { generateNumber } from '../src/cli.js';

const generateSymbol = (symbols) => {
  const symbolsCount = symbols.length;
  const randomIndex = generateNumber(0, symbolsCount);
  return symbols[randomIndex];
};

const gameRule = 'What is the result of the expression?';

const makeBrainCalc = () => {
  const question = `${generateNumber(1, 100)} ${generateSymbol(['+', '-', '*'])} ${generateNumber(1, 100)}`;
  const correctAnswer = eval(question).toString();

  return [question, correctAnswer];
};

export { gameRule, makeBrainCalc };
