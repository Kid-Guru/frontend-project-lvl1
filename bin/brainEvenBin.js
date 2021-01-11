#!/usr/bin/env node
import { gameRule, makeBrainEven } from '../games/brain-even.js';
import runBrainGames from '../src/engine.js';

const runBrainEven = () => runBrainGames(gameRule, makeBrainEven);

export default runBrainEven;
