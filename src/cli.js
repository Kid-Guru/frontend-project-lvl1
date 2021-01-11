#!/usr/bin/env node
import readline from 'readline-sync';

const generateNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readline.question('May I have your name? ');
  return playerName;
};

export { readline, generateNumber, greeting };
