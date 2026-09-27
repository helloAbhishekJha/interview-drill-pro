# Interview Drill Pro — User Submit Checklist

**As of Sun Sep 27, 2026.** This 12-step table is the status to reopen in a new Cursor window. Older notes below are detail only; where they conflict, this table wins.

## Paths

- This app: `/Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app`
- Parent repo (NextBeat + both apps): `/Users/abhishekjha/aiagents/ethglobal2026`
- NextBeat: `/Users/abhishekjha/aiagents/ethglobal2026/nextbeat-app`
- Resume Chat: `/Users/abhishekjha/aiagents/ethglobal2026/resume-chat-app`
- Service account JSON (NEVER commit): `/Users/abhishekjha/keys/interview-drill-play-737227e172cf.json`
- Service account email: `revenuecat-service-account@interview-drill-play.iam.gserviceaccount.com`
- Expo account / project: [helloabhishekjha/interview-drill-pro](https://expo.dev/accounts/helloabhishekjha/projects/interview-drill-pro)
- Expo project id: `d93c3330-2abf-4206-85e5-2acc6706901a` (in `app.json` and `.env` as `EAS_PROJECT_ID`)
- Internal testing link: https://play.google.com/apps/internaltest/4701699961566588128
- Open in Cursor: File → Open Folder → the interview-drill-app path

## 12 steps (Sun Sep 27, 2026)

| Step | What | Status |
|------|------|--------|
| 1 | Play app Interview Drill Pro, package com.helloabhishekjha.interviewdrill | Done |
| 2 | Subscription idrill_pro_monthly | Stuck — needs AAB upload first |
| 3 | Cloud service account JSON saved | Done. Play invite sent Sep 27 |
| 4 | RevenueCat project Interview Drill Pro | Done |
| 5 | RC Google Play app + upload JSON + goog_ key into interview-drill-app/.env | Done except the package-name check. JSON uploaded, Pub/Sub on, `goog_` key in `.env`. Re-save after step 10 |
| 6 | Entitlement `pro`. Offering `interview_drill_pro` if it is Current. Play monthly later | Done for now. Test Store monthly only. Attach Play `idrill_pro_monthly` after step 10 and step 2 |
| 7 | .env EXPO_PUBLIC_RC_MOCK=false and EXPO_PUBLIC_JUDGE_PROMO_CODE=SHIPATON-JUDGE-2026 | Done |
| 8 | eas login + eas init (projectId in app.json) | Done. Logged in as helloabhishekjha. Project `d93c3330-2abf-4206-85e5-2acc6706901a` |
| 9 | eas build production AAB | Built. Download the .aab from the Expo build page and upload it in step 10 |
| 10 | Upload AAB | Internal testing link ready. Production still blocked for 14 days. Link: https://play.google.com/apps/internaltest/4701699961566588128 |
| 11 | Store listing + privacy URL | Privacy URL is in the app. Listing text is ready to paste. Feature graphic and phone screenshots are left until after recording |
| 12 | Devpost | Not started. Video is left until after recording |

**Privacy URL:** https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d

**BillDesk:** later, after the demo is submitted. Seller payout KYC only. It does not block the free Play listing, the judge code, or a buyer paying Google with UPI in India. It can block a real Play subscription sold to someone outside India.

**US judges:** code `SHIPATON-JUDGE-2026` on the paywall or in Settings. Checked on the device. No Google Pay, UPI, RevenueCat charge, or BillDesk. RevenueCat does not charge cards in this app; a real subscription still goes through Google Play.

**Play 14-day gate (confirmed on the dashboard Sun Sep 27):** This personal Play account cannot open Production until a closed test has at least 12 testers opted in for 14 days. That extra wait ends after the RevenueCat Shipaton deadline (Wed Sep 30, 2026, 11:45 PM PDT). RevenueCat still wants a public production store URL, and Play will not grant that URL in time. Keep going on internal testing, the subscription, the demo, and Devpost. Do not plan a production listing before the deadline.

**Left after recording:** Play feature graphic (1024×500), at least 2 phone screenshots, and the Devpost demo video.

**Do this order now:** install from the internal link → privacy policy URL → step 2 subscription → step 5 re-save in RevenueCat → step 12 Devpost without the video. Add the feature graphic, screenshots, and video after recording. Production stays blocked for 14 days. BillDesk last.

## Click path

### Step 8 — Expo login. Done

Logged in as `helloabhishekjha`. Project https://expo.dev/accounts/helloabhishekjha/projects/interview-drill-pro. Id `d93c3330-2abf-4206-85e5-2acc6706901a` is in `app.json` and in `.env` as `EAS_PROJECT_ID`.

### Step 3 — Invite the Play service account. Do this now

JSON is already saved. Play still needs the invite.

1. Open https://play.google.com/console/users-and-permissions
2. **Invite new users**
3. Paste email: `revenuecat-service-account@interview-drill-play.iam.gserviceaccount.com`
4. App: **Interview Drill Pro**. Permission: **Admin**
5. Send the invite. A service account does not accept email

File for step 5, do not commit and do not paste its contents in chat: `/Users/abhishekjha/keys/interview-drill-play-737227e172cf.json`

### Step 5 — RevenueCat Android app and goog_ key. Partial

Pub/Sub API is enabled. The `goog_` key is in `.env`. Come back after step 10 and click save again so RevenueCat can find the package name.

1. https://app.revenuecat.com → project **Interview Drill Pro** → **Apps** → add **Google Play**
2. Package, paste exactly: `com.helloabhishekjha.interviewdrill`
3. Upload `/Users/abhishekjha/keys/interview-drill-play-737227e172cf.json`
4. **API keys** → copy the Android key that starts with `goog_`. Ignore any key that starts with `test_`
5. Paste into `/Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app/.env` on this line: `EXPO_PUBLIC_RC_ANDROID_KEY=goog_paste_here`

If RevenueCat cannot see the Play app yet, leave the key blank, screenshot the page, and continue to step 9. The judge code still works without that key.

### Step 6 — Entitlement and offering

Same RevenueCat project.

1. **Product catalog → Entitlements**. Identifier must be exactly `pro`. If the wizard created `Interview Drill Pro Pro`, change the identifier to `pro`
2. **Offerings**. Identifier must be exactly `default`. Add one monthly package
3. Attach Play product `idrill_pro_monthly` after step 2. Create `pro` and `default` now if the product does not exist yet

### Step 7 — .env flags. Already written

File: `/Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app/.env`

```bash
EXPO_PUBLIC_RC_MOCK=false
EXPO_PUBLIC_JUDGE_PROMO_CODE=SHIPATON-JUDGE-2026
```

### Step 9 — Production AAB

After step 8, and after the `goog_` key is in `.env` if you have it:

```bash
cd /Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app
npx eas-cli build --platform android --profile production
```

Download the `.aab` from the build page when it finishes. A separate dev APK is not required for submission. If the build fails, screenshot the error and skip to step 11.

### Step 10 — Upload the AAB

1. https://play.google.com/console → **Interview Drill Pro**
2. **Release → Production → Create new release**
3. Upload the `.aab` from step 9
4. Release notes, paste: `First production release. Offline daily interview and manager-conversation drills. Pro reviewer access uses the in-app code SHIPATON-JUDGE-2026.`
5. Review notes, paste: `No login. Free daily drill works offline. To test Pro, open the paywall or Settings and enter SHIPATON-JUDGE-2026. The Google account must not already be subscribed. Privacy policy: https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d`

If Production says you need 12 testers for 14 days, screenshot that screen and upload the same AAB to **Internal testing** so step 2 can unlock. That account cannot reach a public Production URL before Sep 30.

### Step 11 — Privacy URL on the store listing

The app already links to this URL. Paste it into Play.

1. Play Console → **Interview Drill Pro** → **Grow users → Store presence → Main store listing**
2. Privacy policy, paste: `https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d`
3. App name: `Interview Drill Pro`. Short description: `Offline manager conversation and interview drills`
4. Icon file: `/Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app/assets/images/icon.png`

### Step 2 — Subscription. Only after an AAB is uploaded

1. Play Console → **Interview Drill Pro** → **Monetize → Products → Subscriptions → Create subscription**
2. Product ID, paste exactly: `idrill_pro_monthly`
3. Name: `Interview Drill Pro Monthly`
4. Base plan: monthly, price `$4.99`. Activate the base plan
5. RevenueCat → entitlement `pro` → attach `idrill_pro_monthly` to offering `default`

If the page still asks for an APK, step 10 is not finished. Screenshot it and go to step 12. Judges can use the code without this product.

### Step 12 — Devpost

Open https://revenuecat-shipaton-2026.devpost.com/

| Field | Paste or upload |
|---|---|
| Play Store URL | Production link after review. If it is not live yet, leave it and finish the rest before Sep 30, 11:45 PM PDT |
| Privacy policy | `https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d` |
| Judge code | `SHIPATON-JUDGE-2026` |
| Icon | `/Users/abhishekjha/aiagents/ethglobal2026/interview-drill-app/assets/images/icon.png` |
| RevenueCat project ID | Copy from the RevenueCat project URL or Project settings |
| Screenshot | One phone image, 1179×2556, no device frame, after the app is installed |
| Video | YouTube or Vimeo, public or unlisted, under 2 minutes. Show the free drill, the timer, the paywall, code `SHIPATON-JUDGE-2026`, then history |

Tick Career Coaching Influencer, HAMM, and #BuildInPublic. Leave OneSignal, Stripe, and Layers off.

**App:** Interview Drill Pro  
**Package:** `com.helloabhishekjha.interviewdrill`  
**Target:** RevenueCat Shipaton 2026 · MVP 1 submit Fri Sep 25 2026  
**Code status:** Production-ready except secrets below and Play Console clicks.

---

## 1. Google Play Console (manual)

### Create app

**Sat Sep 26:** Done. App shell exists. Subscriptions page was reached and asked for an APK/AAB before a subscription can be created.

1. [Play Console](https://play.google.com/console) → **Create app**
2. App name: **Interview Drill Pro**
3. Default language: English (US)
4. App / game: **App**
5. Free or paid: **Free** (subscription via IAP)

### App identity
- **Package name:** `com.helloabhishekjha.interviewdrill` (immutable — must match `app.json`)
- Upload **1024×1024** icon (use `assets/images/icon.png` or export from AppScreens after RC milestone)

### Subscription product

**Sat Sep 26:** Not done. `idrill_pro_monthly` is blocked until an AAB is uploaded. BillDesk verification is still open (do not treat Play payments identity as finished).

1. **Monetize → Products → Subscriptions → Create subscription**
2. **Product ID:** `idrill_pro_monthly` (must match `lib/config.ts` and RevenueCat)
3. Name: e.g. **Interview Drill Pro Monthly**
4. Base plan: monthly, price **$4.99 USD** (or your chosen price)
5. Activate subscription after creating base plan

### Store listing (minimum for production)
- Short description: offline manager conversation + interview drills
- Full description: Heather / Career Coaching angle — flight simulator for hard conversations
- **Privacy policy URL:** replace placeholder in `lib/config.ts` → `PRIVACY_POLICY_URL` (Notion page OK)
- Content rating questionnaire → complete
- Target audience / data safety → no backend, local storage only
- Screenshots: at least **1× 1179×2556** (no device frame) for Devpost + Play

### Production release
1. Build production AAB (see §4 EAS below)
2. **Release → Production → Create new release**
3. Upload AAB from EAS build artifact
4. Add **release notes** + **review notes for judges:**
   - How to test free daily drill
   - How to start Pro trial or use judge promo code: `EXPO_PUBLIC_JUDGE_PROMO_CODE` value (default `SHIPATON-JUDGE-2026`)
   - Account must **not** already be subscribed (Tminus replay tip)
5. **Submit for review** → wait 24–48h for US-accessible URL
6. Confirm listing is **Production** (not open/closed testing only)

---

## 2. RevenueCat (manual)

**Sat Sep 26:** Project **Interview Drill Pro** exists. Onboarding answered (Education, new app, Android, monetize with in-app purchases). Install screen: **Expo** selected; SDK already in the app; do not paste the `test_` API key. Adding the Google Play app, uploading the JSON, and copying the `goog_` key are still left.

1. [RevenueCat dashboard](https://app.revenuecat.com) → **New project** — **done** (name: Interview Drill Pro)
2. **Add app → Android** — **not done**
   - Package: `com.helloabhishekjha.interviewdrill`
   - Play Store credentials: upload **Google Play service account JSON** from `/Users/abhishekjha/keys/interview-drill-revenuecat.json` (never commit)
     - Google Cloud project is the Interview Drill project; Google Play Android Developer API is enabled; JSON is already downloaded
     - Play Console → **Users and permissions** → invite service account `client_email` — **not confirmed**
3. **Products:** import / link `idrill_pro_monthly` from Play — **not done** (Play subscription blocked until AAB)
4. **Entitlements:** create `pro` → attach `idrill_pro_monthly` — identifier `pro` **not confirmed** (onboarding may have suggested “Interview Drill Pro Pro”)
5. **Offerings:** create `default` (identifier must match app) → add `$rc_monthly` or monthly package
6. Copy **Android public API key** → `.env`:

```bash
EXPO_PUBLIC_RC_ANDROID_KEY=goog_xxxxxxxx
EXPO_PUBLIC_RC_MOCK=false
EXPO_PUBLIC_JUDGE_PROMO_CODE=YOUR-JUDGE-CODE
```

7. Optional: set same judge code in Play Console promo (or rely on in-app promo redemption for judges)

### Verify on device
- EAS **development** APK on real Android phone
- Purchase + restore works
- Hit **first test purchase** milestone → Ship Kit perks

---

## 3. Environment variables

Create `interview-drill-app/.env` (never commit):

| Variable | Value |
|----------|-------|
| `EXPO_PUBLIC_RC_ANDROID_KEY` | RevenueCat Android public key |
| `EXPO_PUBLIC_RC_MOCK` | `false` for real IAP builds |
| `EXPO_PUBLIC_JUDGE_PROMO_CODE` | Code documented in Devpost for judges |

Also set as **EAS secrets** for cloud builds:

```bash
cd interview-drill-app
eas secret:create --name EXPO_PUBLIC_RC_ANDROID_KEY --value "goog_xxx" --type string
eas secret:create --name EXPO_PUBLIC_RC_MOCK --value "false" --type string
eas secret:create --name EXPO_PUBLIC_JUDGE_PROMO_CODE --value "YOUR-CODE" --type string
```

Update `lib/config.ts`:
- `PRIVACY_POLICY_URL` → your live Notion/Google Doc URL

---

## 4. EAS build & submit (manual)

```bash
cd interview-drill-app
npm install
npx eas login
npx eas init          # links project — writes projectId into app.json
```

### Development build (test IAP)
```bash
eas build --platform android --profile development
```
Install APK on device → test purchase + restore + judge promo code.

### Production AAB (Play submit)
```bash
eas build --platform android --profile production
```
Download AAB → upload to Play Console **Production** track.

### Optional: EAS Submit
```bash
eas submit --platform android --profile production
```
Requires `play-service-account.json` configured (see EAS submit docs).

---

## 5. Devpost submission

**URL:** [revenuecat-shipaton-2026.devpost.com](https://revenuecat-shipaton-2026.devpost.com/)

### Required fields
- [ ] Complete **participant form** (emailed after register) — unlocks Ship Kit tier 1
- [ ] **Play Store URL** (US-accessible production listing)
- [ ] **Project media:** 1024×1024 icon
- [ ] **Screenshot:** ≥1 at 1179×2556, no device frame
- [ ] **Demo video:** ≤2 min, YouTube/Vimeo, public or unlisted
  - Show: free daily drill → timer → paywall → Pro unlock (or promo) → history on **real Android device**
  - Name target awards in **spoken audio**: Career Coaching Influencer, HAMM, #BuildInPublic
- [ ] **Judge access:** free trial **and** backup promo code in description
- [ ] RevenueCat project ID
- [ ] Privacy policy URL (same as Play listing)

### Award checkboxes (defend in video + text)
| Category | Enter? |
|----------|--------|
| Influencer — Career Coaching (Heather) | **Yes (primary)** |
| HAMM | **Yes** |
| #BuildInPublic | **Yes** |
| Keep Them Coming Back (OneSignal) | Only if integrated |
| Funnel Vision (Stripe) | Only if funnel live |

### Description angles
- **Not** a focus app or AI chat generator
- **Offline** timed drills for manager feedback, boundaries, FAANG behavioral
- Heather brief: rehearse before the stakes are real

---

## 6. Pre-submit verification (you run)

```bash
cd interview-drill-app
npm run typecheck
```

On **production/dev build** (not Expo Go):
- [ ] Free daily drill works offline
- [ ] Manager loop deck locked when free
- [ ] Pro purchase unlocks all premium decks
- [ ] Restore purchases works
- [ ] Judge promo code unlocks Pro (Settings or Paywall footer)
- [ ] Privacy policy link opens
- [ ] Play production URL loads in US
- [ ] Video link public/unlisted, under 2 min
- [ ] #Shipaton post + Discord #post-engagement-boost

---

## 7. Blocked on you only (cannot be automated)

| Item | Why |
|------|-----|
| Play subscription `idrill_pro_monthly` (app shell exists; BillDesk still open; needs an AAB) | Google account + manual clicks |
| Upload existing JSON into RevenueCat (file already at `~/keys/interview-drill-revenuecat.json`; Play invite not confirmed) | RevenueCat app not added yet |
| `EXPO_PUBLIC_RC_ANDROID_KEY` | Secret from RC dashboard — not confirmed |
| `eas init` project ID | Links Expo account |
| EAS cloud builds | Requires Expo login + secrets |
| Privacy policy hosted URL | Notion/page you publish |
| Production Play submit + review wait | 24–48h calendar time |
| Demo video recording | Real device footage |
| Devpost submit | Your account |
| `#BuildInPublic` posts | Your social accounts |

---

*Generated Fri Sep 25, 2026 — code-ready for Shipaton MVP 1.*
