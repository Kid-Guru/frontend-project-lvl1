#!/usr/bin/env node
import { gameRule, makeBrainPrime } from '../src/games/brainPrime.js';
import runBrainGames from '../src/engine.js';

const runBrainPrime = () => runBrainGames(gameRule, makeBrainPrime);
runBrainPrime();
export default runBrainPrime;
