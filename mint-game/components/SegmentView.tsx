'use client';

import type { Segment } from '../types';

interface SegmentViewProps {
  segment: Segment;
}

export default function SegmentView({ segment }: SegmentViewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="border-b pb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">{segment.title}</h2>
          <span className="text-sm text-gray-500 uppercase">{segment.perspective}</span>
        </div>
        <p className="text-sm text-gray-600">{segment.time}</p>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed">{segment.description}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded border">
        <h3 className="font-semibold mb-2">Environment</h3>
        <p className="text-sm text-gray-700">{segment.environment}</p>
      </div>

      {segment.notes.length > 0 && (
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h3 className="font-semibold mb-2">Notes Found</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {segment.notes.map((note, idx) => (
              <li key={idx} className="text-gray-700">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

