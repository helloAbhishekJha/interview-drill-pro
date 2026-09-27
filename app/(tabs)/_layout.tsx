import { SymbolView } from 'expo-symbols';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { usePurchases } from '@/context/PurchaseContext';

export default function TabLayout() {
  const { isPro } = usePurchases();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#818cf8',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: { backgroundColor: '#0f172a', borderTopColor: '#1e293b' },
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f8fafc',
        headerShadowVisible: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'sun.max.fill', android: 'wb_sunny', web: 'wb_sunny' }} tintColor={color} size={24} />
          ),
          headerRight: () => (
            <Pressable style={{ marginRight: 16, flexDirection: 'row', gap: 14, alignItems: 'center' }}>
              <Link href="/settings" asChild>
                <Pressable hitSlop={8}>
                  <SymbolView
                    name={{ ios: 'gearshape.fill', android: 'settings', web: 'settings' }}
                    size={22}
                    tintColor="#94a3b8"
                  />
                </Pressable>
              </Link>
              {!isPro && (
                <Link href="/paywall" asChild>
                  <Pressable hitSlop={8}>
                    <SymbolView
                      name={{ ios: 'crown.fill', android: 'star', web: 'star' }}
                      size={22}
                      tintColor="#fbbf24"
                    />
                  </Pressable>
                </Link>
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="decks"
        options={{
          title: 'Decks',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'books.vertical.fill', android: 'menu_book', web: 'menu_book' }} tintColor={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => (
            <SymbolView name={{ ios: 'clock.fill', android: 'history', web: 'history' }} tintColor={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
