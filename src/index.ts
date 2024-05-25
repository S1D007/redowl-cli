#!/usr/bin/env node
import { Command } from 'commander';
import { startScheduler } from './scheduler';
import { readConfigFromFile } from './utils/configReader';

const program = new Command();

program
  .version('0.1.0')
  .option('-e, --every <interval>', 'Interval at which the blink reminder should be run (e.g., "20m")')
  .option('-d, --duration <duration>', 'Duration of the blink reminder (e.g., "20s")')
  .option('-c, --config <path>', 'Path to JSON or YAML config file')
  .action((options) => {
    if (options.config) {
      const config = readConfigFromFile(options.config);
      if (config) {
        startScheduler(config.every, config.duration);
      } else {
        console.error('Failed to read configuration from file.');
        process.exit(1);
      }
    } else if (options.every && options.duration) {
      startScheduler(options.every, options.duration);
    } else {
      console.error('Either --config or both --every and --duration options are required.');
      process.exit(1);
    }
  });

program.parse(process.argv);
