'use client';

import { useGameStore } from '../lib/store';
import { endings } from '../lib/data-loader';
import type { Ending } from '../types';

interface EndingViewProps {
  ending: Ending;
}

export default function EndingView({ ending }: EndingViewProps) {
  const { resetLoop, loopCount, puzzleCards } = useGameStore();
  const endingData = endings[ending];

  const handleContinue = () => {
    if (ending === 'loop') {
      resetLoop();
    } else {
      // For other endings, could restart or show credits
      resetLoop();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center border-b pb-6">
        <h2 className="text-3xl font-bold mb-2">{endingData.title}</h2>
        <p className="text-lg text-gray-600">{endingData.description}</p>
      </div>

      {ending === 'loop' && (
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Loop {loopCount + 1}</h3>
          <p className="text-sm text-gray-700 mb-2">
            You keep your puzzle cards and try again.
          </p>
          {puzzleCards.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-1">Puzzle Cards:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {puzzleCards.map((card) => (
                  <li key={card}>{card}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {ending === 'loop' ? 'Try Again' : 'Play Again'}
        </button>
      </div>
    </div>
  );
}

