import { Link, useRouter } from 'expo-router';
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
import { RC_PRODUCT_ID } from '@/lib/config';

export default function PaywallScreen() {
  const router = useRouter();
  const { isPro, mockMode, configError, purchasePro, restore, redeemPromoCode } = usePurchases();
  const [busy, setBusy] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  if (isPro) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>You have Pro</Text>
        <Text style={styles.body}>Manager loop, FAANG behavioral, and system design decks are unlocked.</Text>
        <Pressable style={styles.primary} onPress={() => router.back()}>
          <Text style={styles.primaryText}>Continue drilling</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Interview Drill Pro</Text>
      <Text style={styles.title}>Unlock conversation drills</Text>
      <Text style={styles.body}>
        Rehearse manager feedback, boundaries, and FAANG behavioral stories — all offline, no account
        required.
      </Text>
      <View style={styles.list}>
        <Text style={styles.item}>✓ Manager loop — feedback, boundaries, saying no</Text>
        <Text style={styles.item}>✓ FAANG behavioral + system design lite decks</Text>
        <Text style={styles.item}>✓ 2 min prep + 5 min answer timers per prompt</Text>
        <Text style={styles.item}>✓ Local history on your phone</Text>
      </View>
      {mockMode && (
        <Text style={styles.mock}>
          Mock mode — purchases simulate until RevenueCat + Play Store are wired. Tap below to test
          unlock UI.
        </Text>
      )}
      {configError && (
        <Text style={styles.configError}>
          {configError} Free daily drills still work; purchases disabled until configured.
        </Text>
      )}
      <Pressable
        style={[styles.primary, configError && styles.primaryDisabled]}
        disabled={busy || Boolean(configError)}
        onPress={async () => {
          setBusy(true);
          const ok = await purchasePro();
          setBusy(false);
          if (ok) router.back();
        }}>
        {busy ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.primaryText}>Start Pro — $4.99/mo ({RC_PRODUCT_ID})</Text>
        )}
      </Pressable>
      <Pressable style={styles.secondary} disabled={busy || Boolean(configError)} onPress={() => void restore()}>
        <Text style={styles.secondaryText}>Restore purchases</Text>
      </Pressable>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.dismiss}>Not now</Text>
      </Pressable>

      <View style={styles.promoSection}>
        <Text style={styles.promoLabel}>Have a judge or promo code?</Text>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter promo code"
          placeholderTextColor="#64748b"
          autoCapitalize="characters"
          autoCorrect={false}
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <Pressable
          style={styles.promoBtn}
          disabled={busy || !promoCode.trim()}
          onPress={async () => {
            setBusy(true);
            setPromoMessage(null);
            const ok = await redeemPromoCode(promoCode);
            setBusy(false);
            if (ok) {
              router.back();
            } else {
              setPromoMessage('Invalid code. Check Devpost for the judge promo code.');
            }
          }}>
          <Text style={styles.promoBtnText}>Redeem code</Text>
        </Pressable>
        {promoMessage ? <Text style={styles.promoError}>{promoMessage}</Text> : null}
      </View>

      <View style={styles.footer}>
        <Link href="/privacy" style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Privacy policy</Text>
        </Link>
        <Link href="/settings" style={styles.footerLink}>
          <Text style={styles.footerLinkText}>Settings</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, paddingBottom: 40 },
  kicker: { color: '#6366f1', fontWeight: '700', letterSpacing: 0.5 },
  title: { color: '#f8fafc', fontSize: 28, fontWeight: '800', marginTop: 8 },
  body: { color: '#94a3b8', marginTop: 12, lineHeight: 22, fontSize: 16 },
  list: { marginTop: 20, gap: 8 },
  item: { color: '#cbd5e1', fontSize: 15 },
  mock: {
    marginTop: 16,
    color: '#fbbf24',
    backgroundColor: '#422006',
    padding: 12,
    borderRadius: 10,
    lineHeight: 20,
    fontSize: 13,
  },
  configError: {
    marginTop: 16,
    color: '#fca5a5',
    backgroundColor: '#450a0a',
    padding: 12,
    borderRadius: 10,
    lineHeight: 20,
    fontSize: 13,
  },
  primary: {
    marginTop: 24,
    backgroundColor: '#4f46e5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryDisabled: { opacity: 0.5 },
  primaryText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secondary: {
    marginTop: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 12,
  },
  secondaryText: { color: '#cbd5e1', fontWeight: '600' },
  dismiss: { color: '#64748b', textAlign: 'center', marginTop: 20 },
  promoSection: {
    marginTop: 28,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    gap: 10,
  },
  promoLabel: { color: '#94a3b8', fontWeight: '600', fontSize: 14 },
  promoInput: {
    backgroundColor: '#1e293b',
    borderRadius: 10,
    padding: 12,
    color: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#334155',
  },
  promoBtn: {
    backgroundColor: '#334155',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  promoBtnText: { color: '#e2e8f0', fontWeight: '600' },
  promoError: { color: '#f87171', fontSize: 13 },
  footer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  footerLink: { padding: 4 },
  footerLinkText: { color: '#64748b', fontSize: 13, textDecorationLine: 'underline' },
});
