import { useFonts } from 'expo-font';
import { DarkTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { PurchaseProvider } from '@/context/PurchaseContext';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0f172a',
    card: '#1e293b',
    primary: '#6366f1',
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <PurchaseProvider>
      <ThemeProvider value={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="drill/[promptId]"
            options={{ title: 'Drill', presentation: 'card', headerStyle: { backgroundColor: '#0f172a' }, headerTintColor: '#f8fafc' }}
          />
          <Stack.Screen
            name="paywall"
            options={{ title: 'Go Pro', presentation: 'modal', headerStyle: { backgroundColor: '#0f172a' }, headerTintColor: '#f8fafc' }}
          />
          <Stack.Screen
            name="settings"
            options={{ title: 'Settings', headerStyle: { backgroundColor: '#0f172a' }, headerTintColor: '#f8fafc' }}
          />
          <Stack.Screen
            name="privacy"
            options={{ title: 'Privacy', headerStyle: { backgroundColor: '#0f172a' }, headerTintColor: '#f8fafc' }}
          />
        </Stack>
      </ThemeProvider>
    </PurchaseProvider>
  );
}
