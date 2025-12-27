export type Perspective = 'innie' | 'outie';

export type Day = 1 | 5 | 10 | 15;

export interface Segment {
  id: string;
  perspective: Perspective;
  day: Day;
  time: string;
  title: string;
  description: string;
  environment: string;
  notes: string[];
  decisionId?: string;
  nextSegmentId: string;
}

