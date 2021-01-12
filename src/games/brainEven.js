import { generateNumber } from '../cli.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeBrainEven = () => {
  const question = generateNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameRule, makeBrainEven };
