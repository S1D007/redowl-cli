import { setInterval, setTimeout } from "timers";
import {
  logBlinkStart,
  logBlinkEnd,
  logCompletedRuns,
  greetUser,
} from "./utils/logger";
import { playStartSound, playEndSound } from "./service/sound.service";

function parseTime(time: string): number {
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

function blink(interval: string, blinkDuration: string) {
  const intervalMs = parseTime(interval);
  const blinkDurationMs = parseTime(blinkDuration);
  greetUser(interval, blinkDuration);
  setInterval(() => {
    logBlinkStart();
    playStartSound();
    setTimeout(() => {
      logBlinkEnd();
      logCompletedRuns()
      playEndSound();
    }, blinkDurationMs);
  }, intervalMs);
}

export function startScheduler(interval: string, blinkDuration: string) {
  blink(interval, blinkDuration);
}
