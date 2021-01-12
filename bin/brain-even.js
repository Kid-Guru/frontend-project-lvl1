#!/usr/bin/env node
import { gameRule, makeBrainEven } from '../src/games/brainEven.js';
import runBrainGames from '../src/engine.js';

const runBrainEven = () => runBrainGames(gameRule, makeBrainEven);
runBrainEven();
