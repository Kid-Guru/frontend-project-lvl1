#!/usr/bin/env node
import { gameRule, makeBrainCalc } from '../games/brain-calc.js';
import runBrainGames from '../src/engine.js';

const runBrainCalc = () => runBrainGames(gameRule, makeBrainCalc);

export default runBrainCalc;
