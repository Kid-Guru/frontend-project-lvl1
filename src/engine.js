#!/usr/bin/env node
import { readline, greeting } from './cli.js';

const runBrainGames = (gameRule, runGame) => {
  const playerName = greeting();
  console.log(gameRule);

  let correctAnswersCount = 0;
  const answersToWin = 3;

  while (correctAnswersCount < answersToWin) {
    const [question, correctAnswer] = runGame();
    console.log(`Question: ${question}`);
    const playerAnswer = readline.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runBrainGames;
