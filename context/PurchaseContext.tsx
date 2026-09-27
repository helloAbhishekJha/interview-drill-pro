import Constants from 'expo-constants';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Platform } from 'react-native';

import { JUDGE_PROMO_CODE } from '@/lib/config';
import { loadJudgeUnlock, saveJudgeUnlock } from '@/lib/storage';
import { PRO_ENTITLEMENT } from '@/lib/types';

type PurchaseContextValue = {
  ready: boolean;
  isPro: boolean;
  mockMode: boolean;
  configError: string | null;
  restore: () => Promise<void>;
  purchasePro: () => Promise<boolean>;
  redeemPromoCode: (code: string) => Promise<boolean>;
  refresh: () => Promise<void>;
};

const PurchaseContext = createContext<PurchaseContextValue | null>(null);

const androidKey = process.env.EXPO_PUBLIC_RC_ANDROID_KEY ?? '';
const iosKey = process.env.EXPO_PUBLIC_RC_IOS_KEY ?? '';
const forceMock = process.env.EXPO_PUBLIC_RC_MOCK === 'true';

function useMockPurchases(): boolean {
  if (forceMock) return true;
  if (Platform.OS === 'web') return true;
  if (Constants.appOwnership === 'expo') return true;
  return false;
}

function getApiKey(): string {
  return Platform.OS === 'android' ? androidKey : iosKey;
}

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const mockMode = useMockPurchases();
  const apiKey = getApiKey();
  const configError =
    !mockMode && !apiKey
      ? `RevenueCat key missing. Set EXPO_PUBLIC_RC_${Platform.OS === 'android' ? 'ANDROID' : 'IOS'}_KEY and rebuild.`
      : null;

  const [ready, setReady] = useState(false);
  const [isPro, setIsPro] = useState(false);

  const applyProState = useCallback((active: boolean) => {
    setIsPro(active);
  }, []);

  const refresh = useCallback(async () => {
    const judgeUnlock = await loadJudgeUnlock();
    if (judgeUnlock) {
      applyProState(true);
      setReady(true);
      return;
    }

    if (mockMode || configError) {
      setReady(true);
      return;
    }

    try {
      const Purchases = (await import('react-native-purchases')).default;
      const info = await Purchases.getCustomerInfo();
      applyProState(Boolean(info.entitlements.active[PRO_ENTITLEMENT]));
    } catch {
      /* RC unavailable — free tier still works */
    } finally {
      setReady(true);
    }
  }, [mockMode, configError, applyProState]);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const judgeUnlock = await loadJudgeUnlock();
      if (judgeUnlock && !cancelled) {
        applyProState(true);
        setReady(true);
        return;
      }

      if (mockMode) {
        if (!cancelled) setReady(true);
        return;
      }

      if (configError) {
        if (!cancelled) setReady(true);
        return;
      }

      try {
        const { default: Purchases, LOG_LEVEL } = await import('react-native-purchases');
        Purchases.setLogLevel(LOG_LEVEL.INFO);
        Purchases.configure({ apiKey });
        if (!cancelled) await refresh();
      } catch {
        if (!cancelled) setReady(true);
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, [mockMode, configError, apiKey, refresh, applyProState]);

  const purchasePro = useCallback(async (): Promise<boolean> => {
    if (mockMode) {
      applyProState(true);
      return true;
    }
    if (configError) return false;

    try {
      const Purchases = (await import('react-native-purchases')).default;
      const offerings = await Purchases.getOfferings();
      const pkg = offerings.current?.availablePackages[0];
      if (!pkg) return false;
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      const active = Boolean(customerInfo.entitlements.active[PRO_ENTITLEMENT]);
      applyProState(active);
      return active;
    } catch {
      return false;
    }
  }, [mockMode, configError, applyProState]);

  const restore = useCallback(async () => {
    if (mockMode) {
      applyProState(false);
      await saveJudgeUnlock(false);
      return;
    }
    if (configError) return;

    try {
      const Purchases = (await import('react-native-purchases')).default;
      const info = await Purchases.restorePurchases();
      applyProState(Boolean(info.entitlements.active[PRO_ENTITLEMENT]));
    } catch {
      /* user cancelled or no purchases */
    }
  }, [mockMode, configError, applyProState]);

  const redeemPromoCode = useCallback(
    async (code: string): Promise<boolean> => {
      const normalized = code.trim().toUpperCase();
      if (!normalized) return false;

      if (normalized === JUDGE_PROMO_CODE.toUpperCase()) {
        await saveJudgeUnlock(true);
        applyProState(true);
        return true;
      }

      return false;
    },
    [applyProState],
  );

  const value = useMemo(
    () => ({
      ready,
      isPro,
      mockMode,
      configError,
      restore,
      purchasePro,
      redeemPromoCode,
      refresh,
    }),
    [ready, isPro, mockMode, configError, restore, purchasePro, redeemPromoCode, refresh],
  );

  return <PurchaseContext.Provider value={value}>{children}</PurchaseContext.Provider>;
}

export function usePurchases(): PurchaseContextValue {
  const ctx = useContext(PurchaseContext);
  if (!ctx) throw new Error('usePurchases must be used within PurchaseProvider');
  return ctx;
}
