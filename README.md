# Interview Drill Pro

**Repository:** https://github.com/helloAbhishekJha/interview-drill-pro

**Shipaton 2026:** Devpost **submitted** Sep 28, 2026 (checkpoint). Optional polish until Sep 30 PDT — [USER-SUBMIT-CHECKLIST-DRILL.md](./USER-SUBMIT-CHECKLIST-DRILL.md)
BillDesk: after the demo submit. It does not block the free listing or the judge code.
Play Production: blocked. This account needs 12 testers for 14 days before production access. That wait is additional to the RevenueCat deadline (Sep 30, 2026, 11:45pm PDT). Use internal testing.
Next: internal-test AAB → privacy URL → subscription → RevenueCat package recheck → Devpost.

**RevenueCat Shipaton 2026** entry — offline **manager conversation drills** (Heather brief); Pro adds FAANG behavioral and system design decks.

| | |
|---|---|
| **Contest** | [Shipaton 2026](https://revenuecat-shipaton-2026.devpost.com/) |
| **All hackathon deadlines** | [HACKATHONS-TODO.md](../HACKATHONS-TODO.md) (Amazon Oct 23 · Nebius Oct 30 PDT) |
| **Target submit** | Sun Sep 27, 2026 (official Sep 30 PDT) |
| **Store** | Google Play · `com.helloabhishekjha.interviewdrill` |
| **Target awards** | Career Coaching Influencer · HAMM · #BuildInPublic · optional OneSignal |
| **Official 2026 rules** | [SHIPATON-2026-OFFICIAL.md](./SHIPATON-2026-OFFICIAL.md) |
| **Action checklist** | [SHIPATON-TODO.md](./SHIPATON-TODO.md) |
| **Winner research** | [SHIPATON-WINNERS-RESEARCH.md](./SHIPATON-WINNERS-RESEARCH.md) |

## What it does

- **Free:** one curated **daily** behavioral prompt (works offline).
- **Drill mode:** 2 min prep + 5 min answer timers, STAR/system/manager hints.
- **Pro (RevenueCat):** FAANG behavioral, system design lite, manager decks — all bundled locally.
- **History:** last 50 sessions on device (AsyncStorage).

## Develop offline (mock RC until Play listing)

```bash
cd interview-drill-app
cp .env.example .env   # EXPO_PUBLIC_RC_MOCK=true
npm install
npm run web            # UI + mock Pro unlock
# or
npm start              # scan QR — mock mode in Expo Go
```

**Real IAP** needs a **development build** (not Expo Go):

```bash
npx eas login
npx eas init
# set EXPO_PUBLIC_RC_MOCK=false + RC Android key in .env
eas build --platform android --profile development
```

## Next steps (Play verified ✅ Sep 24)

1. Create app **`com.helloabhishekjha.interviewdrill`** in Play Console.
2. [RevenueCat](https://app.revenuecat.com) → new project → Android app → link Play service account.
3. Create entitlement **`pro`**, offering **`default`**, product **`idrill_pro_monthly`** (match Play subscription).
4. Set `EXPO_PUBLIC_RC_ANDROID_KEY` in `.env`, `EXPO_PUBLIC_RC_MOCK=false`.
5. `eas build --platform android --profile production` → internal testing → production.
6. Devpost: Play URL, RC project ID, **judge promo code**, 1024 icon, 1179×2556 screenshot, <2 min YouTube demo.

## ⚠️ Relative's reminders — security + pre-submit gates

**Status (24 Sep):** $25 Play developer fee paid · **Play identity verified ✅ Sep 24** · **card removed from Play Console ✅ Sep 24**.

Do **not** wire RevenueCat or submit Devpost until these gates pass:

- [x] Complete Play identity verification ✅ Sep 24
- [x] **Remove card / payment method from Play Console after verification** ✅ Sep 24 — relative's advice: don't leave a card on the developer account once verify is done
- [ ] Create RevenueCat project + add Android API key to `.env` (`EXPO_PUBLIC_RC_ANDROID_KEY`; configure RC dashboard + Play service account)
- [ ] Set `EXPO_PUBLIC_RC_MOCK=false`, rebuild with EAS (`development` build first, then `production`)
- [ ] **Verification check before Devpost submit:** Play identity verified, app published (or internal test track), RC purchase or restore works on a **real dev build** (not Expo Go)
- [ ] Play listing live + judge promo code ready for Devpost

## Shipaton checklist

- [x] Play developer verified Sep 24
- [x] Remove card from Play account ✅ Sep 24
- [ ] RevenueCat project + `pro` entitlement + real IAP tested
- [ ] Production AAB on Play (US available)
- [ ] Demo video shows paywall + purchase (or restore)
- [ ] Devpost submit

## Stack

Expo 57 · Expo Router · RevenueCat `react-native-purchases` · AsyncStorage · no backend.

## Future convergence (Resume Chat)

Timed drill UX here (2 min prep + 5 min answer, STAR/manager frameworks, session history) is designed to be **reused** by [Resume Chat](../resume-chat-app/) post-Shipaton: apply to a job in chat → fetch company intel → generate tailored drill prompts. See [SHIPATON-RESUME-PLAN.md § Post-apply interview prep](../resume-chat-app/SHIPATON-RESUME-PLAN.md#post-apply-interview-prep-interview-drill-convergence).
