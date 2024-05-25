"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playEndSound = exports.playStartSound = void 0;
/// <reference path="./play-sound.d.ts" />
const path_1 = __importDefault(require("path"));
const play_sound_1 = __importDefault(require("play-sound"));
const audioPlayer = (0, play_sound_1.default)();
function playStartSound() {
    const startSoundPath = path_1.default.join(__dirname, "../assets/sounds/crystal-glass.wav");
    audioPlayer.play(startSoundPath, (err) => {
        if (err)
            console.error(`Error playing start sound: ${err}`);
    });
}
exports.playStartSound = playStartSound;
function playEndSound() {
    const endSoundPath = path_1.default.join(__dirname, "../assets/sounds/tic-toc.wav");
    audioPlayer.play(endSoundPath, (err) => {
        if (err)
            console.error(`Error playing end sound: ${err}`);
    });
}
exports.playEndSound = playEndSound;
