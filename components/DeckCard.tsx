import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Deck } from '@/lib/types';

type Props = {
  deck: Deck;
  locked: boolean;
  onPress: () => void;
};

export function DeckCard({ deck, locked, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed, locked && styles.locked]}
      onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.title}>{deck.title}</Text>
        {locked ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>PRO</Text>
          </View>
        ) : (
          <View style={[styles.badge, styles.freeBadge]}>
            <Text style={styles.badgeText}>FREE</Text>
          </View>
        )}
      </View>
      <Text style={styles.desc}>{deck.description}</Text>
      <Text style={styles.meta}>{deck.prompts.length} prompts</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  pressed: { opacity: 0.85 },
  locked: { opacity: 0.92 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#f1f5f9', fontSize: 17, fontWeight: '700', flex: 1 },
  desc: { color: '#94a3b8', marginTop: 6, lineHeight: 20 },
  meta: { color: '#64748b', marginTop: 10, fontSize: 12 },
  badge: {
    backgroundColor: '#4338ca',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginLeft: 8,
  },
  freeBadge: { backgroundColor: '#0f766e' },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '800' },
});
