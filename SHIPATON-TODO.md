# Shipaton 2026 — Interview Drill Pro TODO

**Target submit:** Sun Sep 27, 2026 (buffer before Sep 30 @ 11:45pm PDT)  
**Primary categories:** Career Coaching Influencer (Heather) · HAMM · #BuildInPublic · optional Keep Them Coming Back (OneSignal)  
**Reference:** [SHIPATON-2026-OFFICIAL.md](./SHIPATON-2026-OFFICIAL.md) · [SHIPATON-WINNERS-RESEARCH.md](./SHIPATON-WINNERS-RESEARCH.md)

---

## Play / Devpost submission hygiene

- [x] Play developer identity verified (Sep 24)
- [x] Remove card from Play Console after verification (Sep 24)
- [ ] **Production** Play release live (not open/closed testing only — forum: testing ≠ public release). **Blocked Sep 27:** Play requires 12 testers opted in for 14 days before production. That extra wait ends after the RevenueCat deadline (Sep 30, 2026, 11:45 PM PDT). Use internal testing.
- [ ] US-accessible Play listing URL ready for Devpost
- [ ] Complete Devpost **participant form** (emailed after register) — unlocks Ship Kit tier 1
- [ ] Devpost **Project media:** 1024×1024 icon (forum: upload under project media, not a separate field)
- [ ] ≥1 screenshot **1179×2556**, no device frame (AppScreens 50% off after first RC test purchase)
- [ ] Demo video **≤2 min**, YouTube/Vimeo, **public or unlisted** (not private)
- [ ] Video shows: free daily drill → timer → paywall → Pro unlock → history on **real Android device**
- [ ] **Name every target award** in description, category answer fields, **and** spoken in video (Week 7)
- [ ] Judge access: document promo code **`SHIPATON-JUDGE-2026`** in Devpost (unlocks Pro on device; US judges do not pay)
- [ ] Play review notes: how judges test premium; account must **not** already be subscribed (Tminus replay tip)
- [x] Privacy policy URL public — https://gist.github.com/helloAbhishekJha/cc37a7af863704e06b2b65f157039b4d (paste the same URL into the Play listing)
- [ ] BillDesk KYC — **after demo submit**. Not required for the free listing, judge code `SHIPATON-JUDGE-2026`, or an India UPI purchase. Blocks a real subscription sale to buyers outside India only.
- [ ] Confirm app in [Showcase / gallery](https://revenuecat-shipaton-2026.devpost.com/project-gallery) — submit if missing
- [ ] Final Devpost pass: store link + video link work; no draft left unsubmitted after Sep 30

---

## RevenueCat setup

- [ ] Create RevenueCat project + Android app (`com.helloabhishekjha.interviewdrill`)
- [ ] Link Play service account; entitlement **`pro`**, offering **`default`**, product **`idrill_pro_monthly`**
- [ ] Set `EXPO_PUBLIC_RC_ANDROID_KEY`; `EXPO_PUBLIC_RC_MOCK=false`
- [ ] EAS **development** build → test purchase/restore on device (not Expo Go)
- [ ] Hit **first test purchase** milestone → unlock Ship Kit (AppScreens, Sentry, etc.)
- [ ] EAS **production** AAB → production track
- [ ] Hit **first Store API call** milestone (real Play key, not Test Store only)
- [ ] Document HAMM fields: monetization strategy, paywall/pricing, any conversion numbers (even n=small)
- [ ] Optional: RC paywall experiment before deadline (Week 7 metrics stream)

---

## Optional sponsor combos (ranked)

| Priority | Sponsor | Ship Kit perk | Devpost extra | Effort |
|----------|---------|---------------|---------------|--------|
| **1** | **OneSignal** | Growth plan 3 mo free @ registration | App ID + ≥1 campaign (push/Journey) | Low–medium |
| **2** | **Stripe** | $250 credits @ registration | Live RC Funnel URL + Stripe Project ID | Medium |
| **3** | **Layers** | 2 mo free @ registration | SDK installed before judging + growth loop write-up | Medium |
| 4 | AppScreens | 50% off @ first test purchase | Store screenshots | Low (after RC test) |
| 5 | Tminus | 80% off @ RC project | iOS only — skip unless adding iOS | — |
| Skip | Noise, Replit, KMP, Galaxy | — | Wrong fit / stack / budget | — |

### OneSignal (Keep Them Coming Back — $25k 1st)

- [ ] Install OneSignal SDK in Expo dev build
- [ ] Deploy **one campaign:** e.g. daily drill reminder at user’s chosen time, or streak nudge after 2 missed days
- [ ] Tie to RC lifecycle if possible (trial started → onboarding push)
- [ ] Devpost: OneSignal App ID + campaign description

### Stripe (Funnel Vision — $15k 1st)

- [ ] Landing: “Practice FAANG behavioral interviews offline” → Stripe checkout → app install deep link
- [ ] RC Funnels + Stripe Project; document web payment volume (even $0 — design still judged)
- [ ] Devpost: funnel URL + Stripe Project ID

### Layers (Growth Loop — $15k 1st)

- [ ] Install Layers SDK before Oct 1 judging
- [ ] One experiment: e.g. LinkedIn post → landing → install → complete day-1 drill
- [ ] Devpost: hypothesis, channel, signal, learnings, next step

---

## Demo video / assets

- [ ] Script aligned to **Heather brief:** “flight simulator for hard conversations,” not script generator
- [ ] Show **manager deck** + **behavioral deck** (Career Coaching), not only FAANG trivia
- [ ] Blinkist-style paywall moment (Karo/SkillMe pattern): hero benefit + “View all plans”
- [ ] End card: categories entered + `#Shipaton`
- [ ] No copyrighted music; device footage only
- [ ] Optional: AppScreens polish after milestone 3 (demo: youtu.be/HxS28AOSjRg)

---

## #BuildInPublic cadence

- [ ] Daily or near-daily posts through Sep 30 with **#Shipaton** (and #BuildInPublic)
- [ ] Share in Discord **#post-engagement-boost**
- [ ] Content mix: build updates, one drill tip, paywall iteration, Play launch milestone
- [ ] Devpost BiP fields: social links + how public feedback changed the app
- [ ] Optional: attend Final AMA **Fri Sep 25, 9am PT** ([livestreams](https://www.shipaton.com/livestreams))

---

## Devpost description & award checkboxes

Tick **only** categories you can defend in video + text.

| Checkbox / field | Enter? | Devpost text to prep |
|------------------|--------|----------------------|
| **Influencer — Career Coaching (Heather)** | **Yes (primary)** | Scenarios: feedback, boundaries, saying no; active timed practice; audience fit (new managers 25–44, US/UK/IN) |
| **HAMM** | **Yes** | Free daily drill → Pro unlocks offline FAANG/manager decks; pricing rationale |
| **#BuildInPublic** | **Yes** | Links to posts; lessons from community |
| **RevenueCat Design** | If polish pass | Timer UX, deck cards, paywall animations |
| **Keep Them Coming Back (OneSignal)** | If integrated | App ID + campaign |
| **Funnel Vision (Stripe)** | If funnel live | Funnel URL + Stripe Project ID |
| **The Growth Loop (Layers)** | If SDK installed | Experiment write-up |
| Grand Prize | Optional mention | Post-launch growth numbers if any |
| Peace Prize | **No** unless genuine | Job-access angle only if authentic |
| Best Game, Catvertising, Next Gen, KMP, Noise, Replit, Galaxy | **No** | Wrong fit |

**Do not use** Heather’s name, likeness, or branding without written consent (rules § submission).

---

## Differentiation (from gallery intel)

- [ ] Devpost title/subtitle: **offline interview & manager conversation drills** — not “focus app” or “AI chat”
- [ ] Heather copy: **rehearse before the stakes are real**; timed prep + answer loop
- [ ] Contrast vs **FlowState / Matchbox / Deep-Session:** you’re **career conversation practice**, not pomodoro/research journal
- [ ] Contrast vs **CharmPilot:** structured **scenarios + timers**, not open-ended AI reply generation
- [ ] HAMM one-liner (SkillMe/Vector Guard style): e.g. *“One Pro sub unlocks offline FAANG decks; free daily drill builds the habit before onsite season.”*
- [ ] Goal-adaptive paywall copy: “Google L4 behavioral” vs “New manager feedback” offerings
- [ ] Android polish: Material-consistent UI; call out offline-on-Pixel in video

---

## Morning checklist (last 6 days)

1. Store link works in US Play Store?
2. Video link public/unlisted and under 2 min?
3. Promo code + trial both documented?
4. Awards named in Devpost + video?
5. One #Shipaton post today + Discord boost channel?
6. RC purchase/restore retested on production build?

---

*Generated Sep 24, 2026 from Devpost resources, updates, forum, and gallery analysis.*
