'use client';

import { useEffect } from 'react';
import { useGameStore } from '../lib/store';
import { getSegmentById, getDecisionBySegmentId } from '../lib/data-loader';
import SegmentView from './SegmentView';
import DecisionCard from './DecisionCard';
import ConvergenceView from './ConvergenceView';
import EndingView from './EndingView';
import type { DecisionChoice } from '../types';

export default function Game() {
  const {
    currentSegmentId,
    completedSegments,
    decisions,
    hasReachedConvergence,
    convergenceChoice,
    makeDecision,
    completeSegment,
    getEnding,
    startGame,
    advanceToSegment,
  } = useGameStore();

  useEffect(() => {
    if (!currentSegmentId || currentSegmentId === '') {
      startGame();
    }
  }, [currentSegmentId, startGame]);

  const segment = getSegmentById(currentSegmentId);
  const decision = segment?.decisionId ? getDecisionBySegmentId(segment.id) : undefined;
  
  // Check if we should show ending (at end segment with convergence complete)
  const shouldShowEnding = currentSegmentId === 'end' && hasReachedConvergence && convergenceChoice;
  const ending = shouldShowEnding ? getEnding() : null;

  if (ending) {
    return <EndingView ending={ending} />;
  }

  if (!segment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const handleDecision = (choice: DecisionChoice) => {
    if (segment.decisionId) {
      makeDecision(segment.decisionId, choice);
    }
    handleNext();
  };

  const handleNext = () => {
    completeSegment(segment.id);
    
    if (segment.nextSegmentId === 'convergence') {
      // Advance to convergence segment
      advanceToSegment('convergence');
      return;
    }
    
    if (segment.nextSegmentId === 'end') {
      // Check convergence and determine ending
      if (hasReachedConvergence) {
        // Ending will be shown on next render
        return;
      }
      return;
    }

    // Advance to next segment
    advanceToSegment(segment.nextSegmentId);
  };

  // Show convergence view
  if (segment.id === 'convergence') {
    return <ConvergenceView />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <SegmentView segment={segment} />

        {decision && !decisions[decision.id] ? (
          <div className="mt-8">
            <DecisionCard decision={decision} onChoose={handleDecision} />
          </div>
        ) : (
          <div className="mt-8 text-center">
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

