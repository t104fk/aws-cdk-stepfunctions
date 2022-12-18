type TextPrompt = {
  // TODO: <= 2000 characters
  text: string;
  weight: number;
};
export type Schema = {
  // TODO: [ 0 .. 35 ]
  cfg_scale: number;
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
  text_prompts: TextPrompt[];
};
