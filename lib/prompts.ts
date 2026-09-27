import type { Deck } from './types';

export const DECKS: Deck[] = [
  {
    id: 'daily-free',
    title: 'Daily basics',
    description: 'Free behavioral prompts — one featured every day.',
    premium: false,
    prompts: [
      {
        id: 'daily-1',
        question: 'Tell me about a time you disagreed with your manager. How did you handle it?',
        framework: 'STAR',
        tip: 'Name the disagreement early, show respect, end with outcome — not who was “right”.',
        followUps: ['What would you do differently?', 'How did you follow up after the decision?'],
      },
      {
        id: 'daily-2',
        question: 'Describe a project where requirements changed late. What did you do?',
        framework: 'STAR',
        tip: 'Highlight communication, reprioritization, and what you shipped anyway.',
      },
      {
        id: 'daily-3',
        question: 'Walk me through debugging a production issue under time pressure.',
        framework: 'STAR',
        tip: 'Hypothesis → narrow blast radius → fix → postmortem in one sentence.',
      },
      {
        id: 'daily-4',
        question: 'Tell me about a time you had to learn a new stack quickly for a deadline.',
        framework: 'STAR',
        tip: 'Show learning plan: docs, spike, mentor, smallest vertical slice.',
      },
      {
        id: 'daily-5',
        question: 'How do you prioritize when everything is “urgent”?',
        framework: 'MANAGER',
        tip: 'Impact × urgency matrix; say no with tradeoffs and a written stack rank.',
      },
      {
        id: 'daily-6',
        question: 'Describe a mistake you made that affected users. How did you recover?',
        framework: 'STAR',
        tip: 'Own it, quantify impact, fix, prevent recurrence — no blame shifting.',
      },
      {
        id: 'daily-7',
        question: 'Tell me about mentoring or unblocking a teammate.',
        framework: 'STAR',
        tip: 'Their growth outcome matters more than your hero moment.',
      },
    ],
  },
  {
    id: 'manager-loop',
    title: 'Manager loop',
    description: 'Flight simulator for hard conversations — feedback, boundaries, and saying no.',
    premium: true,
    prompts: [
      {
        id: 'mgr-1',
        question: 'How do you run a project with ambiguous ownership?',
        framework: 'MANAGER',
        tip: 'RACI, weekly written updates, explicit decision log.',
      },
      {
        id: 'mgr-2',
        question: 'Tell me about growing someone from mid to senior.',
        framework: 'MANAGER',
        tip: 'Specific behaviors changed, not just “I mentored them”.',
      },
      {
        id: 'mgr-3',
        question:
          'Your direct report missed deadlines twice this sprint. Practice the feedback conversation you would have tomorrow.',
        framework: 'MANAGER',
        tip: 'Name the pattern, ask what blocked them, agree on one concrete change — not a lecture.',
        followUps: ['What if they get defensive?', 'How do you document this without sounding punitive?'],
      },
      {
        id: 'mgr-4',
        question:
          'A peer asks you to cover their on-call shift again — third time this month. Practice saying no without burning the relationship.',
        framework: 'MANAGER',
        tip: 'Acknowledge the ask, state your boundary, offer one alternative (swap date, escalate to lead).',
        followUps: ['What if they push back?', 'When would you say yes?'],
      },
      {
        id: 'mgr-5',
        question:
          'You were promoted; a former peer now reports to you. They missed a commitment in front of the team. Practice the awkward feedback.',
        framework: 'MANAGER',
        tip: 'Separate the friendship from the role; feedback in private; focus on impact, not “you embarrassed me”.',
        followUps: ['How do you reset the dynamic?', 'What do you say in the next team meeting?'],
      },
    ],
  },
  {
    id: 'faang-behavioral',
    title: 'FAANG behavioral',
    description: 'High-signal stories recruiters expect at onsite season.',
    premium: true,
    prompts: [
      {
        id: 'faang-1',
        question: 'Tell me about your most impactful project in the last year.',
        framework: 'STAR',
        tip: 'Lead with metric moved, then scope, then your specific lever.',
      },
      {
        id: 'faang-2',
        question: 'Describe a time you received harsh feedback.',
        framework: 'STAR',
        tip: 'Show you implemented change — quote the feedback if safe.',
      },
      {
        id: 'faang-3',
        question: 'When did you push back on a technical decision?',
        framework: 'STAR',
        tip: 'Data + alternatives + willingness to commit once decided.',
      },
      {
        id: 'faang-4',
        question: 'Tell me about working with a difficult stakeholder.',
        framework: 'STAR',
        tip: 'Assume positive intent; show written alignment (PRD, RFC).',
      },
      {
        id: 'faang-5',
        question: 'Describe a time you improved team velocity or quality.',
        framework: 'STAR',
        tip: 'CI, tests, runbooks, on-call — pick one lever with before/after.',
      },
    ],
  },
  {
    id: 'system-design-lite',
    title: 'System design lite',
    description: 'Phone-screen scale questions with structure hints.',
    premium: true,
    prompts: [
      {
        id: 'sys-1',
        question: 'Design a URL shortener (read-heavy, global).',
        framework: 'SYSTEM',
        tip: 'API → hash/key → DB choice → cache → analytics — 5 min each.',
        followUps: ['Hot keys?', 'Custom aliases?', 'Expiration?'],
      },
      {
        id: 'sys-2',
        question: 'Design a rate limiter for a public API.',
        framework: 'SYSTEM',
        tip: 'Token bucket vs sliding window; per-user vs per-IP; Redis.',
      },
      {
        id: 'sys-3',
        question: 'Design notification delivery (push + email + in-app).',
        framework: 'SYSTEM',
        tip: 'Queue, workers, idempotency, user prefs, dead letter queue.',
      },
    ],
  },
];

export function getDeck(deckId: string): Deck | undefined {
  return DECKS.find((d) => d.id === deckId);
}

export function getPrompt(promptId: string): { deck: Deck; prompt: Deck['prompts'][0] } | undefined {
  for (const deck of DECKS) {
    const prompt = deck.prompts.find((p) => p.id === promptId);
    if (prompt) return { deck, prompt };
  }
  return undefined;
}

export function allFreePrompts() {
  return DECKS.filter((d) => !d.premium).flatMap((d) => d.prompts);
}
