export type DecisionChoice = 'A' | 'B' | 'C';

export type DecisionType = 
  | 'investigate' 
  | 'ignore' 
  | 'ask' 
  | 'obey' 
  | 'check' 
  | 'cover' 
  | 'continue' 
  | 'accept' 
  | 'find' 
  | 'help' 
  | 'ignore_stranger';

export interface Decision {
  id: string;
  segmentId: string;
  prompt: string;
  choices: {
    A: { label: string; type: DecisionType };
    B: { label: string; type: DecisionType };
    C?: { label: string; type: DecisionType };
  };
}

