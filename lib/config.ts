/** Public policy URL for Play Console and the in-app link. */
export const PRIVACY_POLICY_URL =
  'https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d';

/** Play subscription product id — must match Play Console + RevenueCat. */
export const RC_PRODUCT_ID = 'idrill_pro_monthly';

/** RevenueCat entitlement identifier. */
export const RC_ENTITLEMENT = 'pro';

/** RevenueCat offering identifier. */
export const RC_OFFERING = 'default';

/** Judge / reviewer promo code — set EXPO_PUBLIC_JUDGE_PROMO_CODE in .env for production. */
export const JUDGE_PROMO_CODE =
  process.env.EXPO_PUBLIC_JUDGE_PROMO_CODE ?? 'SHIPATON-JUDGE-2026';
