import type { DecisionChoice } from './decision';

export interface GameState {
  currentSegmentId: string;
  completedSegments: string[];
  decisions: Record<string, DecisionChoice>;
  loopCount: number;
  puzzleCards: string[];
  hasReachedConvergence: boolean;
  convergenceChoice?: {
    innie: 'help' | 'obey';
    outie: 'help' | 'ignore';
  };
}

