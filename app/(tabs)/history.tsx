import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { loadSessions, clearSessions } from '@/lib/storage';
import type { DrillSession } from '@/lib/types';

export default function HistoryScreen() {
  const [sessions, setSessions] = useState<DrillSession[]>([]);

  useFocusEffect(
    useCallback(() => {
      void loadSessions().then(setSessions);
    }, []),
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.heading}>History</Text>
        {sessions.length > 0 && (
          <Pressable onPress={() => void clearSessions().then(() => setSessions([]))}>
            <Text style={styles.clear}>Clear</Text>
          </Pressable>
        )}
      </View>
      {sessions.length === 0 ? (
        <Text style={styles.empty}>Complete a drill to see sessions here. Stored on device only.</Text>
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.q} numberOfLines={2}>
                {item.question}
              </Text>
              <Text style={styles.meta}>
                Prep {item.prepSeconds}s · Answer {item.answerSeconds}s ·{' '}
                {new Date(item.completedAt).toLocaleDateString()}
              </Text>
              {item.notes ? (
                <Text style={styles.notes} numberOfLines={3}>
                  {item.notes}
                </Text>
              ) : null}
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  heading: { color: '#f8fafc', fontSize: 26, fontWeight: '800' },
  clear: { color: '#f87171', fontWeight: '600' },
  empty: { color: '#64748b', padding: 20, lineHeight: 22 },
  list: { padding: 20, paddingBottom: 40 },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  q: { color: '#e2e8f0', fontWeight: '600', lineHeight: 22 },
  meta: { color: '#64748b', fontSize: 12, marginTop: 8 },
  notes: { color: '#94a3b8', marginTop: 8, fontSize: 13, lineHeight: 18 },
});
