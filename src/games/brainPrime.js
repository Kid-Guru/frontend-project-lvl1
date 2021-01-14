import { generateNumber } from '../cli.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeBrainPrime = () => {
  const num = generateNumber(1, 25);
  const correctAnswer = isPrime(num);
  const question = num.toString();

  return [question, correctAnswer];
};

export { gameRule, makeBrainPrime };
