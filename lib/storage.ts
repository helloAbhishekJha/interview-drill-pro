import AsyncStorage from '@react-native-async-storage/async-storage';

import type { DrillSession } from './types';

const SESSIONS_KEY = '@interview_drill/sessions';
const JUDGE_UNLOCK_KEY = '@interview_drill/judge_unlock';

export async function loadJudgeUnlock(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(JUDGE_UNLOCK_KEY)) === 'true';
  } catch {
    return false;
  }
}

export async function saveJudgeUnlock(unlocked: boolean): Promise<void> {
  if (unlocked) {
    await AsyncStorage.setItem(JUDGE_UNLOCK_KEY, 'true');
  } else {
    await AsyncStorage.removeItem(JUDGE_UNLOCK_KEY);
  }
}

export async function loadSessions(): Promise<DrillSession[]> {
  try {
    const raw = await AsyncStorage.getItem(SESSIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DrillSession[];
  } catch {
    return [];
  }
}

export async function saveSession(session: DrillSession): Promise<void> {
  const existing = await loadSessions();
  const next = [session, ...existing].slice(0, 50);
  await AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(next));
}

export async function clearSessions(): Promise<void> {
  await AsyncStorage.removeItem(SESSIONS_KEY);
}
