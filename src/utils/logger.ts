let completedRuns = 0;

export function logBlinkStart() {
  console.log("\x1b[32m%s\x1b[0m", "Blink now!");
}

export function logBlinkEnd() {
  completedRuns++;
  console.log("\x1b[33m%s\x1b[0m", "Get back to work!");
}

export function logCompletedRuns() {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `Number of completed blinks: ${completedRuns}`
  );
}

export function greetUser(every: string, duration: string) {
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
