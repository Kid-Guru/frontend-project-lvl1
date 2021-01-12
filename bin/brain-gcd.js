#!/usr/bin/env node
import { gameRule, makeBrainGcd } from '../src/games/brainGcd.js';
import runBrainGames from '../src/engine.js';

const runBrainGcd = () => runBrainGames(gameRule, makeBrainGcd);
runBrainGcd();
export default runBrainGcd;
