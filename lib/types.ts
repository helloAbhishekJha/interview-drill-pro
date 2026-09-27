export type Framework = 'STAR' | 'SYSTEM' | 'MANAGER';

export type Prompt = {
  id: string;
  question: string;
  followUps?: string[];
  framework: Framework;
  tip: string;
};

export type Deck = {
  id: string;
  title: string;
  description: string;
  premium: boolean;
  prompts: Prompt[];
};

export type DrillSession = {
  id: string;
  promptId: string;
  deckId: string;
  question: string;
  notes: string;
  prepSeconds: number;
  answerSeconds: number;
  completedAt: string;
};

export const PRO_ENTITLEMENT = 'pro';
