import { generateNumber } from '../cli.js';

const findGCD = (input1, input2) => {
  let num1 = input1;
  let num2 = input2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return (num1 + num2).toString();
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const makeBrainGcd = () => {
  const num1 = generateNumber(0, 20);
  const num2 = generateNumber(0, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  return [question, correctAnswer];
};

export { gameRule, makeBrainGcd };
