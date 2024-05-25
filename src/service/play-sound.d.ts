declare module 'play-sound' {
  export default function player(): {
    play: (path: string, callback: (err: any) => void) => void;
  };
}
