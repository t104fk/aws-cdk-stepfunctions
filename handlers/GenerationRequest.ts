type TextPrompt = {
  // TODO: <= 2000 characters
  text: string;
  weight: number;
};
export type Schema = {
  // TODO: [ 0 .. 35 ]
  scale: number;
  clip_guidance_preset:
    | "FAST_GREEN"
    | "SLOW"
    | "SLOWER"
    | "SLOWEST"
    | "NONE"
    | "SIMPLE"
    | "FAST_BLUE";
  // TODO: [ 512 .. 2048 ]
  height: number;
  // TODO: [ 512 .. 2048 ]
  width: number;
  // TODO: [ 1 .. 10 ]
  samples: number;
  // TODO: [ 10 .. 150 ]
  steps: number;
  prompt: string;
  // TODO: all values is -1 at first
  // TODO: after that, select each weight
  negative_prompt: string[];
};
