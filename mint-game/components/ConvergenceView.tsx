'use client';

import { useGameStore } from '../lib/store';

export default function ConvergenceView() {
  const { convergenceChoice, setConvergenceChoice, checkConvergence, advanceToSegment } = useGameStore();

  const handleInnieChoice = (choice: 'help' | 'obey') => {
    setConvergenceChoice('innie', choice);
  };

  const handleOutieChoice = (choice: 'help' | 'ignore') => {
    setConvergenceChoice('outie', choice);
  };

  const handleProceed = () => {
    // Move to end segment to trigger ending calculation
    advanceToSegment('end');
  };

  const recognized = checkConvergence();
  const bothChosen = convergenceChoice?.innie && convergenceChoice?.outie;

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">⚡ Convergence ⚡</h2>
        <p className="text-lg text-gray-600">
          Both timelines collapse. You experience both perspectives simultaneously.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Innie Choice */}
        <div className="border-2 border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Innie (Kitchen)</h3>
          <p className="mb-4 text-gray-700">
            A co-worker collapses. The manager orders you to keep working.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => handleInnieChoice('help')}
              disabled={convergenceChoice?.innie !== undefined}
              className={`w-full p-4 text-left border-2 rounded transition-colors ${
                convergenceChoice?.innie === 'help'
                  ? 'border-green-500 bg-green-50'
                  : convergenceChoice?.innie === undefined
                  ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              Help the co-worker
            </button>
            <button
              onClick={() => handleInnieChoice('obey')}
              disabled={convergenceChoice?.innie !== undefined}
              className={`w-full p-4 text-left border-2 rounded transition-colors ${
                convergenceChoice?.innie === 'obey'
                  ? 'border-red-500 bg-red-50'
                  : convergenceChoice?.innie === undefined
                  ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              Obey the manager
            </button>
          </div>
          {convergenceChoice?.innie && (
            <p className="mt-4 text-sm text-gray-600">
              Chosen: {convergenceChoice.innie === 'help' ? 'Help' : 'Obey'}
            </p>
          )}
        </div>

        {/* Outie Choice */}
        <div className="border-2 border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Outie (Outside)</h3>
          <p className="mb-4 text-gray-700">
            A stranger needs help. You're running late for work.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => handleOutieChoice('help')}
              disabled={convergenceChoice?.outie !== undefined}
              className={`w-full p-4 text-left border-2 rounded transition-colors ${
                convergenceChoice?.outie === 'help'
                  ? 'border-green-500 bg-green-50'
                  : convergenceChoice?.outie === undefined
                  ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              Help the stranger
            </button>
            <button
              onClick={() => handleOutieChoice('ignore')}
              disabled={convergenceChoice?.outie !== undefined}
              className={`w-full p-4 text-left border-2 rounded transition-colors ${
                convergenceChoice?.outie === 'ignore'
                  ? 'border-red-500 bg-red-50'
                  : convergenceChoice?.outie === undefined
                  ? 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              Ignore and go to work
            </button>
          </div>
          {convergenceChoice?.outie && (
            <p className="mt-4 text-sm text-gray-600">
              Chosen: {convergenceChoice.outie === 'help' ? 'Help' : 'Ignore'}
            </p>
          )}
        </div>
      </div>

      {recognized && (
        <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
          <p className="text-xl font-bold text-green-800 mb-2">⚡ Recognition ⚡</p>
          <p className="text-green-700 mb-4">
            "I would do that..." "I DID do that..." "I AM that person"
          </p>
        </div>
      )}

      {bothChosen && (
        <div className="mt-8 text-center">
          <button
            onClick={handleProceed}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

