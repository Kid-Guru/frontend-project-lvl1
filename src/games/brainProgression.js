import { generateNumber } from '../cli.js';

const gameRule = 'What number is missing in the progression?';

const makeBrainProgression = () => {
  const startNum = generateNumber(1, 80);
  const step = generateNumber(1, 10);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(`${startNum + step * i}`);
  }

  const randomIndex = generateNumber(0, 9);
  const correctAnswer = progression[randomIndex];

  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export { gameRule, makeBrainProgression };
