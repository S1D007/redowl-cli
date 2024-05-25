"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = exports.logCompletedRuns = exports.logBlinkEnd = exports.logBlinkStart = void 0;
let completedRuns = 0;
function logBlinkStart() {
    console.log("\x1b[32m%s\x1b[0m", "Blink now!");
}
exports.logBlinkStart = logBlinkStart;
function logBlinkEnd() {
    completedRuns++;
    console.log("\x1b[33m%s\x1b[0m", "Get back to work!");
}
exports.logBlinkEnd = logBlinkEnd;
function logCompletedRuns() {
    console.log("\x1b[34m%s\x1b[0m", `Number of completed blinks: ${completedRuns}`);
}
exports.logCompletedRuns = logCompletedRuns;
function greetUser(every, duration) {
    console.log(`
  ▄████████    ▄████████ ████████▄   ▄██████▄   ▄█     █▄   ▄█       
  ███    ███   ███    ███ ███   ▀███ ███    ███ ███     ███ ███       
  ███    ███   ███    █▀  ███    ███ ███    ███ ███     ███ ███       
 ▄███▄▄▄▄██▀  ▄███▄▄▄     ███    ███ ███    ███ ███     ███ ███       
▀▀███▀▀▀▀▀   ▀▀███▀▀▀     ███    ███ ███    ███ ███     ███ ███       
▀███████████   ███    █▄  ███    ███ ███    ███ ███     ███ ███       
  ███    ███   ███    ███ ███   ▄███ ███    ███ ███ ▄█▄ ███ ███▌    ▄ 
  ███    ███   ██████████ ████████▀   ▀██████▀   ▀███▀███▀  █████▄▄██ 
  ███    ███                                                ▀         
  Starting Redowl, [CONFIG] time ${every} and duration ${duration}...
  `);
}
exports.greetUser = greetUser;
