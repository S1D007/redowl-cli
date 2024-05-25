#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const scheduler_1 = require("./scheduler");
const configReader_1 = require("./utils/configReader");
const program = new commander_1.Command();
program
    .version('0.1.0')
    .option('-e, --every <interval>', 'Interval at which the blink reminder should be run (e.g., "20m")')
    .option('-d, --duration <duration>', 'Duration of the blink reminder (e.g., "20s")')
    .option('-c, --config <path>', 'Path to JSON or YAML config file')
    .action((options) => {
    if (options.config) {
        const config = (0, configReader_1.readConfigFromFile)(options.config);
        if (config) {
            (0, scheduler_1.startScheduler)(config.every, config.duration);
        }
        else {
            console.error('Failed to read configuration from file.');
            process.exit(1);
        }
    }
    else if (options.every && options.duration) {
        (0, scheduler_1.startScheduler)(options.every, options.duration);
    }
    else {
        console.error('Either --config or both --every and --duration options are required.');
        process.exit(1);
    }
});
program.parse(process.argv);
