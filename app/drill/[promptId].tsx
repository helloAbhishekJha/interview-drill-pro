import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { DrillTimer } from '@/components/DrillTimer';
import { getPrompt } from '@/lib/prompts';
import { saveSession } from '@/lib/storage';

type Phase = 'prep' | 'answer' | 'done';

export default function DrillScreen() {
  const router = useRouter();
  const { promptId, deckId } = useLocalSearchParams<{ promptId: string; deckId?: string }>();
  const match = useMemo(() => (promptId ? getPrompt(promptId) : undefined), [promptId]);

  const [phase, setPhase] = useState<Phase>('prep');
  const [prepRunning, setPrepRunning] = useState(false);
  const [answerRunning, setAnswerRunning] = useState(false);
  const [prepUsed, setPrepUsed] = useState(0);
  const [answerUsed, setAnswerUsed] = useState(0);
  const [notes, setNotes] = useState('');

  if (!match) {
    return (
      <View style={styles.screen}>
        <Text style={styles.error}>Prompt not found.</Text>
      </View>
    );
  }

  const { deck, prompt } = match;

  async function finishDrill() {
    setPhase('done');
    setAnswerRunning(false);
    await saveSession({
      id: `${Date.now()}`,
      promptId: prompt.id,
      deckId: deckId ?? deck.id,
      question: prompt.question,
      notes,
      prepSeconds: prepUsed || 120,
      answerSeconds: answerUsed || 300,
      completedAt: new Date().toISOString(),
    });
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.framework}>{prompt.framework}</Text>
      <Text style={styles.question}>{prompt.question}</Text>
      <Text style={styles.tip}>{prompt.tip}</Text>

      {prompt.followUps && prompt.followUps.length > 0 && (
        <View style={styles.followUps}>
          <Text style={styles.followLabel}>Follow-ups to expect</Text>
          {prompt.followUps.map((f) => (
            <Text key={f} style={styles.followItem}>
              · {f}
            </Text>
          ))}
        </View>
      )}

      {phase !== 'done' && (
        <>
          <DrillTimer
            label="Prep (think in STAR bullets)"
            totalSeconds={120}
            running={prepRunning && phase === 'prep'}
            onToggle={() => {
              if (phase === 'answer') return;
              if (prepRunning) setPrepUsed(120 - 120);
              setPrepRunning((v) => !v);
            }}
            onComplete={() => {
              setPrepRunning(false);
              setPhase('answer');
            }}
          />
          {phase === 'answer' && (
            <DrillTimer
              label="Answer out loud"
              totalSeconds={300}
              running={answerRunning}
              onToggle={() => setAnswerRunning((v) => !v)}
              onComplete={() => void finishDrill()}
            />
          )}
          {phase === 'prep' && !prepRunning && (
            <Pressable style={styles.skip} onPress={() => setPhase('answer')}>
              <Text style={styles.skipText}>Skip to answer phase →</Text>
            </Pressable>
          )}
        </>
      )}

      <Text style={styles.notesLabel}>Notes (optional)</Text>
      <TextInput
        style={styles.notesInput}
        multiline
        placeholder="STAR bullets, metrics, story title..."
        placeholderTextColor="#64748b"
        value={notes}
        onChangeText={setNotes}
      />

      {phase === 'answer' && (
        <Pressable style={styles.doneBtn} onPress={() => void finishDrill()}>
          <Text style={styles.doneText}>Mark complete</Text>
        </Pressable>
      )}

      {phase === 'done' && (
        <View style={styles.doneBox}>
          <Text style={styles.doneTitle}>Saved locally ✓</Text>
          <Pressable style={styles.doneBtn} onPress={() => router.back()}>
            <Text style={styles.doneText}>Back</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20, paddingBottom: 48, gap: 16 },
  error: { color: '#f87171', padding: 20 },
  framework: { color: '#a5b4fc', fontWeight: '700', fontSize: 12 },
  question: { color: '#f8fafc', fontSize: 22, fontWeight: '700', lineHeight: 30 },
  tip: { color: '#94a3b8', lineHeight: 22 },
  followUps: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  followLabel: { color: '#cbd5e1', fontWeight: '600', marginBottom: 8 },
  followItem: { color: '#94a3b8', lineHeight: 22 },
  skip: { alignItems: 'center', padding: 8 },
  skipText: { color: '#818cf8', fontWeight: '600' },
  notesLabel: { color: '#94a3b8', fontWeight: '600', marginTop: 4 },
  notesInput: {
    minHeight: 100,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    color: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#334155',
    textAlignVertical: 'top',
  },
  doneBtn: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  doneText: { color: '#fff', fontWeight: '700' },
  doneBox: { gap: 12 },
  doneTitle: { color: '#34d399', fontWeight: '700', textAlign: 'center' },
});
