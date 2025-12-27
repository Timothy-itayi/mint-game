import { create } from 'zustand';
import type { GameState, DecisionChoice, Ending } from '../types';
import { getStartingSegment, determineEnding } from './data-loader';

interface GameStore extends GameState {
  // Actions
  startGame: () => void;
  completeSegment: (segmentId: string) => void;
  makeDecision: (decisionId: string, choice: DecisionChoice) => void;
  setConvergenceChoice: (perspective: 'innie' | 'outie', choice: 'help' | 'obey' | 'ignore') => void;
  checkConvergence: () => boolean;
  getEnding: () => Ending;
  resetLoop: () => void;
  advanceToSegment: (segmentId: string) => void;
}

const initialState: GameState = {
  currentSegmentId: 'innie-15',
  completedSegments: [],
  decisions: {},
  loopCount: 0,
  puzzleCards: [],
  hasReachedConvergence: false,
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  startGame: () => {
    const startingSegment = getStartingSegment();
    set({
      ...initialState,
      currentSegmentId: startingSegment.id,
      loopCount: get().loopCount, // Preserve loop count
      puzzleCards: get().puzzleCards, // Preserve puzzle cards
    });
  },

  completeSegment: (segmentId: string) => {
    const state = get();
    const segment = state.completedSegments.includes(segmentId)
      ? state.completedSegments
      : [...state.completedSegments, segmentId];
    
    set({ completedSegments: segment });
  },

  makeDecision: (decisionId: string, choice: DecisionChoice) => {
    set((state) => ({
      decisions: {
        ...state.decisions,
        [decisionId]: choice,
      },
    }));
  },

  setConvergenceChoice: (perspective: 'innie' | 'outie', choice: 'help' | 'obey' | 'ignore') => {
    set((state) => {
      const convergenceChoice = state.convergenceChoice || { innie: 'obey', outie: 'ignore' };
      return {
        convergenceChoice: {
          ...convergenceChoice,
          [perspective]: choice,
        },
        hasReachedConvergence: true,
      };
    });
  },

  checkConvergence: () => {
    const state = get();
    if (!state.convergenceChoice) return false;
    
    const { innie, outie } = state.convergenceChoice;
    return innie === 'help' && outie === 'help';
  },

  getEnding: () => {
    const state = get();
    return determineEnding(state.decisions, state.convergenceChoice);
  },

  resetLoop: () => {
    const state = get();
    const newLoopCount = state.loopCount + 1;
    
    // Add puzzle card based on loop count
    const puzzleCards = [...state.puzzleCards];
    if (newLoopCount === 1) {
      puzzleCards.push('manager-role');
    } else if (newLoopCount === 2) {
      puzzleCards.push('temporal-structure');
    } else if (newLoopCount === 3) {
      puzzleCards.push('recognition-method');
    }
    
    set({
      ...initialState,
      loopCount: newLoopCount,
      puzzleCards,
    });
  },

  advanceToSegment: (segmentId: string) => {
    set({ currentSegmentId: segmentId });
  },
}));

