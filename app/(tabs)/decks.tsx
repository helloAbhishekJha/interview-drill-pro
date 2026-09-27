import { Link, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { DeckCard } from '@/components/DeckCard';
import { usePurchases } from '@/context/PurchaseContext';
import { DECKS } from '@/lib/prompts';

export default function DecksScreen() {
  const router = useRouter();
  const { isPro } = usePurchases();

  const featuredDeck = DECKS.find((d) => d.id === 'manager-loop');
  const otherDecks = DECKS.filter((d) => d.id !== 'manager-loop');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Conversation drills</Text>
      <Text style={styles.sub}>
        Practice hard manager conversations and interview stories with timed prep — all content ships
        in the app, no network needed.
      </Text>

      {featuredDeck && (
        <View style={styles.featured}>
          <Text style={styles.featuredLabel}>Featured · Career coaching</Text>
          <DeckCard
            deck={featuredDeck}
            locked={featuredDeck.premium && !isPro}
            onPress={() => {
              if (featuredDeck.premium && !isPro) {
                router.push('/paywall');
                return;
              }
              const first = featuredDeck.prompts[0];
              if (first) {
                router.push({
                  pathname: '/drill/[promptId]',
                  params: { promptId: first.id, deckId: featuredDeck.id },
                });
              }
            }}
          />
        </View>
      )}

      <Text style={styles.section}>All decks</Text>
      {otherDecks.map((deck) => {
        const locked = deck.premium && !isPro;
        return (
          <DeckCard
            key={deck.id}
            deck={deck}
            locked={locked}
            onPress={() => {
              if (locked) {
                router.push('/paywall');
                return;
              }
              const first = deck.prompts[0];
              if (first) {
                router.push({
                  pathname: '/drill/[promptId]',
                  params: { promptId: first.id, deckId: deck.id },
                });
              }
            }}
          />
        );
      })}
      {!isPro && (
        <Link href="/paywall" style={styles.upgrade}>
          <Text style={styles.upgradeText}>Unlock Manager loop + FAANG decks with Pro →</Text>
        </Link>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20, paddingBottom: 40 },
  heading: { color: '#f8fafc', fontSize: 26, fontWeight: '800' },
  sub: { color: '#94a3b8', marginTop: 8, marginBottom: 20, lineHeight: 21 },
  featured: { marginBottom: 8 },
  featuredLabel: {
    color: '#fbbf24',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  section: { color: '#64748b', fontWeight: '600', marginBottom: 12, marginTop: 8 },
  upgrade: {
    marginTop: 8,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6366f1',
    alignItems: 'center',
  },
  upgradeText: { color: '#a5b4fc', fontWeight: '700' },
});
