import { allFreePrompts } from './prompts';
import type { Prompt } from './types';

/** Same calendar day → same free prompt (offline, no server). */
export function getDailyPrompt(date = new Date()): Prompt {
  const pool = allFreePrompts();
  const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return pool[hash % pool.length]!;
}

export function formatDailyLabel(date = new Date()): string {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}
