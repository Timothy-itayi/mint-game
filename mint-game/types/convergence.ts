export type Ending = 'escape' | 'expose' | 'liberation' | 'surrender' | 'loop';

export interface ConvergenceState {
  innieChoice: 'help' | 'obey';
  outieChoice: 'help' | 'ignore';
  recognized: boolean;
}

