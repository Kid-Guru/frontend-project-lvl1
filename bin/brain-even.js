#!/usr/bin/env node
import { gameRule, makeBrainEven } from '../src/games/braineven.js';
import runBrainGames from '../src/engine.js';

const runBrainEven = () => runBrainGames(gameRule, makeBrainEven);
runBrainEven();
export default runBrainEven;
