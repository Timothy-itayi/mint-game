'use client';

import type { Decision, DecisionChoice } from '../types';

interface DecisionCardProps {
  decision: Decision;
  onChoose: (choice: DecisionChoice) => void;
}

export default function DecisionCard({ decision, onChoose }: DecisionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{decision.prompt}</h3>
      
      <div className="space-y-3">
        <button
          onClick={() => onChoose('A')}
          className="w-full p-4 text-left border-2 border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <span className="font-semibold">A:</span> {decision.choices.A.label}
        </button>
        
        <button
          onClick={() => onChoose('B')}
          className="w-full p-4 text-left border-2 border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors"
        >
          <span className="font-semibold">B:</span> {decision.choices.B.label}
        </button>
        
        {decision.choices.C && (
          <button
            onClick={() => onChoose('C')}
            className="w-full p-4 text-left border-2 border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <span className="font-semibold">C:</span> {decision.choices.C.label}
          </button>
        )}
      </div>
    </div>
  );
}

