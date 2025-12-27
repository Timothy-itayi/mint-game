import segmentsData from '../data/segments.json';
import decisionsData from '../data/decisions.json';
import puzzleCardsData from '../data/puzzle-cards.json';
import endingsData from '../data/endings.json';
import type { Segment, Decision, Ending } from '../types';

export const segments: Segment[] = segmentsData.segments as Segment[];
export const decisions: Decision[] = decisionsData.decisions as Decision[];
export const puzzleCards = puzzleCardsData.puzzleCards;
export const endings = endingsData.endings;

export function getSegmentById(id: string): Segment | undefined {
  return segments.find(s => s.id === id);
}

export function getDecisionById(id: string): Decision | undefined {
  return decisions.find(d => d.id === id);
}

export function getDecisionBySegmentId(segmentId: string): Decision | undefined {
  return decisions.find(d => d.segmentId === segmentId);
}

export function getStartingSegment(): Segment {
  return segments.find(s => s.id === 'innie-15') || segments[0];
}

export function determineEnding(
  decisions: Record<string, string>,
  convergenceChoice?: { innie: 'help' | 'obey'; outie: 'help' | 'ignore' }
): Ending {
  // Check surrender first (accepts the split)
  if (decisions['decision-3'] === 'B') {
    return 'surrender';
  }

  // Check convergence requirements
  if (convergenceChoice) {
    const { innie, outie } = convergenceChoice;
    
    // Both must help for recognition
    if (innie === 'help' && outie === 'help') {
      // Check which ending based on previous decisions
      if (decisions['decision-1'] === 'A' && decisions['decision-2'] === 'B') {
        if (decisions['decision-3'] === 'C') {
          return 'escape';
        }
        return 'expose';
      }
      
      if (decisions['decision-1'] === 'C' && decisions['decision-2'] === 'C') {
        return 'liberation';
      }
    }
  }

  // Default to loop
  return 'loop';
}

