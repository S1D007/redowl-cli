/// <reference path="./play-sound.d.ts" />
import path from 'path';
import player from 'play-sound';

const audioPlayer = player();

export function playStartSound() {
  const startSoundPath = path.join(__dirname, "../assets/sounds/crystal-glass.wav");
  audioPlayer.play(startSoundPath, (err: any) => {
    if (err) console.error(`Error playing start sound: ${err}`);
  });
}

export function playEndSound() {
  const endSoundPath = path.join(__dirname, "../assets/sounds/tic-toc.wav");
  audioPlayer.play(endSoundPath, (err: any) => {
    if (err) console.error(`Error playing end sound: ${err}`);
  });
}
