import * as WebBrowser from 'expo-web-browser';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { PRIVACY_POLICY_URL } from '@/lib/config';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Privacy policy</Text>
      <Text style={styles.body}>
        Interview Drill Pro stores drill history locally on your device. Purchases are handled by
        Google Play and RevenueCat. We do not operate a backend or collect personal data beyond what
        the stores require for billing.
      </Text>
      <Text style={styles.body}>
        A reviewer promo code is checked on this device only. Uninstalling the app removes local
        drill history and that unlock.
      </Text>
      <Pressable
        style={styles.linkBtn}
        onPress={() => void WebBrowser.openBrowserAsync(PRIVACY_POLICY_URL)}>
        <Text style={styles.linkText}>Open full privacy policy →</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 24, paddingBottom: 40, gap: 14 },
  title: { color: '#f8fafc', fontSize: 26, fontWeight: '800' },
  body: { color: '#94a3b8', lineHeight: 22, fontSize: 15 },
  linkBtn: {
    marginTop: 8,
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  linkText: { color: '#a5b4fc', fontWeight: '700' },
});
