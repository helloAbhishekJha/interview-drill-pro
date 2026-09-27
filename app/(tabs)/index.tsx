import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { formatDailyLabel, getDailyPrompt } from '@/lib/daily';

export default function TodayScreen() {
  const daily = getDailyPrompt();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Interview Drill Pro</Text>
      <Text style={styles.date}>{formatDailyLabel()}</Text>
      <Text style={styles.heading}>Rehearse before the stakes are real</Text>
      <Text style={styles.sub}>
        A flight simulator for manager feedback, boundaries, and behavioral interviews — timed prep
        and answer loops, fully offline.
      </Text>
      <View style={styles.card}>
        <Text style={styles.framework}>{daily.framework}</Text>
        <Text style={styles.question}>{daily.question}</Text>
        <Text style={styles.tip}>{daily.tip}</Text>
      </View>
      <Link
        href={{ pathname: '/drill/[promptId]', params: { promptId: daily.id, deckId: 'daily-free' } }}
        style={styles.cta}>
        <Text style={styles.ctaText}>Start today&apos;s drill →</Text>
      </Link>
      <Link href="/decks" style={styles.secondary}>
        <Text style={styles.secondaryText}>Browse manager & FAANG decks →</Text>
      </Link>
      <Text style={styles.footer}>
        Free daily prompt · Works offline · Pro unlocks Manager loop, FAANG behavioral, and system
        design decks
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { color: '#6366f1', fontWeight: '700', fontSize: 13, letterSpacing: 1 },
  date: { color: '#64748b', marginTop: 4 },
  heading: { color: '#f8fafc', fontSize: 26, fontWeight: '800', marginTop: 16, lineHeight: 32 },
  sub: { color: '#94a3b8', marginTop: 10, lineHeight: 22, fontSize: 15 },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#334155',
    marginTop: 20,
  },
  framework: {
    color: '#a5b4fc',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 10,
  },
  question: { color: '#f1f5f9', fontSize: 18, lineHeight: 26, fontWeight: '600' },
  tip: { color: '#94a3b8', marginTop: 14, lineHeight: 21, fontSize: 14 },
  cta: {
    marginTop: 20,
    backgroundColor: '#4f46e5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secondary: {
    marginTop: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
  },
  secondaryText: { color: '#a5b4fc', fontWeight: '600', fontSize: 15 },
  footer: { color: '#64748b', marginTop: 20, textAlign: 'center', lineHeight: 20, fontSize: 13 },
});
