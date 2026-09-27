import { Link } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { usePurchases } from '@/context/PurchaseContext';
import { JUDGE_PROMO_CODE } from '@/lib/config';

export default function SettingsScreen() {
  const { isPro, mockMode, configError, restore, redeemPromoCode } = usePurchases();
  const [promoCode, setPromoCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Subscription</Text>
        <Text style={styles.value}>{isPro ? 'Pro active' : 'Free tier'}</Text>
        {mockMode && <Text style={styles.hint}>Mock mode — simulated purchases</Text>}
        {configError && <Text style={styles.error}>{configError}</Text>}
        <Pressable style={styles.btn} disabled={busy} onPress={() => void restore()}>
          <Text style={styles.btnText}>Restore purchases</Text>
        </Pressable>
        {!isPro && (
          <Link href="/paywall" style={styles.link}>
            <Text style={styles.linkText}>View Pro plans →</Text>
          </Link>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Judge / promo code</Text>
        <Text style={styles.hint}>
          Reviewer code, also listed on the Devpost page: {JUDGE_PROMO_CODE}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter promo code"
          placeholderTextColor="#64748b"
          autoCapitalize="characters"
          autoCorrect={false}
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <Pressable
          style={styles.btn}
          disabled={busy || !promoCode.trim()}
          onPress={async () => {
            setBusy(true);
            setMessage(null);
            const ok = await redeemPromoCode(promoCode);
            setBusy(false);
            setMessage(ok ? 'Pro unlocked via promo code.' : 'Invalid code.');
            if (ok) setPromoCode('');
          }}>
          {busy ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Redeem code</Text>}
        </Pressable>
        {message ? (
          <Text style={message.includes('unlocked') ? styles.success : styles.error}>{message}</Text>
        ) : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Legal</Text>
        <Link href="/privacy" style={styles.link}>
          <Text style={styles.linkText}>Privacy policy →</Text>
        </Link>
      </View>

      <Text style={styles.footer}>Interview Drill Pro v1.0.0 · com.helloabhishekjha.interviewdrill</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  title: { color: '#f8fafc', fontSize: 26, fontWeight: '800', marginBottom: 4 },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 10,
  },
  label: { color: '#f1f5f9', fontWeight: '700', fontSize: 16 },
  value: { color: '#cbd5e1', fontSize: 15 },
  hint: { color: '#64748b', fontSize: 13, lineHeight: 19 },
  error: { color: '#f87171', fontSize: 13, lineHeight: 19 },
  success: { color: '#34d399', fontSize: 13 },
  input: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    padding: 12,
    color: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#334155',
  },
  btn: {
    backgroundColor: '#4338ca',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '600' },
  link: { paddingVertical: 4 },
  linkText: { color: '#a5b4fc', fontWeight: '600' },
  footer: { color: '#475569', textAlign: 'center', fontSize: 12, marginTop: 8 },
});
