#!/usr/bin/env node
import askQuestion from '../src/cli.js';

const generateNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const getRigthAnswer = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};
const cheackAnswer = (userAnswer, rigthAnswer) => {
  if (userAnswer === rigthAnswer) return { isCorrect: true, userAnswer, rigthAnswer };
  return { isCorrect: false, userAnswer, rigthAnswer };
};
const letsPlay = (onceAgain, youLose) => {
  const randomNumber = generateNumber(1, 25);
  const rigthAnswer = getRigthAnswer(randomNumber);
  console.log(`Question: ${randomNumber}`);
  askQuestion('Your answer: ')
    .then((userAnswer) => cheackAnswer(userAnswer, rigthAnswer))
    .then((decision) => {
      if (decision.isCorrect === false) {
        console.log(`'${decision.userAnswer}' is wrong answer ;(. Correct answer was '${decision.rigthAnswer}'.`);
        return youLose();
      }
      console.log('Correct!');
      return onceAgain();
    });
};

new Promise((resolve) => {
  console.log('Welcome to the Brain Games!');
  askQuestion('May I have your name?').then((name) => {
    console.log(`Hello, ${name}`);
    resolve(name);
  });
})
  .then((name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    return new Promise((resolve, reject) => letsPlay(() => resolve(name), () => reject(name)));
  })
  .then((name) => new Promise((resolve, reject) => letsPlay(() => resolve(name),
    () => reject(name))))
  .then((name) => new Promise((resolve, reject) => letsPlay(() => resolve(name),
    () => reject(name))))
  .then((name) => console.log(`Congratulations, ${name}!`))
  .catch((name) => console.log(`Let's try again, ${name}!`));
