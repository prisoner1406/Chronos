
export interface Evidence {
  id: string;
  title: string;
  category: 'World Fair' | 'Architecture' | 'Timeline' | 'Technology' | 'Mapping' | 'Artifact' | 'Celestial' | 'Phenomenon';
  description: string;
  imageUrl: string;
  year: string;
  location?: string;
  source?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  EVIDENCE = 'evidence',
  RELICS = 'relics',
  TIMELINE = 'timeline',
  AI_ORACLE = 'oracle'
}
