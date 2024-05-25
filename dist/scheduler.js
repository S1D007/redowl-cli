"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startScheduler = void 0;
const timers_1 = require("timers");
const logger_1 = require("./utils/logger");
const sound_service_1 = require("./service/sound.service");
function parseTime(time) {
    const unit = time.slice(-1);
    const value = parseInt(time.slice(0, -1), 10);
    if (isNaN(value)) {
        throw new Error(`Invalid time value: ${time}`);
    }
    switch (unit) {
        case "s":
            return value * 1000;
        case "m":
            return value * 60 * 1000;
        case "h":
            return value * 60 * 60 * 1000;
        default:
            throw new Error(`Unknown time unit: ${unit}`);
    }
}
function blink(interval, blinkDuration) {
    const intervalMs = parseTime(interval);
    const blinkDurationMs = parseTime(blinkDuration);
    (0, logger_1.greetUser)(interval, blinkDuration);
    (0, timers_1.setInterval)(() => {
        (0, logger_1.logBlinkStart)();
        (0, sound_service_1.playStartSound)();
        (0, timers_1.setTimeout)(() => {
            (0, logger_1.logBlinkEnd)();
            (0, logger_1.logCompletedRuns)();
            (0, sound_service_1.playEndSound)();
        }, blinkDurationMs);
    }, intervalMs);
}
function startScheduler(interval, blinkDuration) {
    blink(interval, blinkDuration);
}
exports.startScheduler = startScheduler;
