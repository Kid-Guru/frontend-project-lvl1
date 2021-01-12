#!/usr/bin/env node
import { gameRule, makeBrainCalc } from '../src/games/brainCalc.js';
import runBrainGames from '../src/engine.js';

const runBrainCalc = () => runBrainGames(gameRule, makeBrainCalc);
runBrainCalc();
export default runBrainCalc;
