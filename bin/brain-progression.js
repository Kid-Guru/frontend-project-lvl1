#!/usr/bin/env node
import { gameRule, makeBrainProgression } from '../src/games/brainProgression.js';
import runBrainGames from '../src/engine.js';

const runBrainProgression = () => runBrainGames(gameRule, makeBrainProgression);
runBrainProgression();
