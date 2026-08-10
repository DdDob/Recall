# Recall — MVP Scaffold

The memory layer for crypto. This is a working Next.js 14 (App Router) scaffold covering:

- **Landing page** (`/`) — hero, features, pricing, all real copy from the pitch.
- **Dashboard** (`/dashboard`) — real wallet connect (MetaMask / any injected EIP-1193 wallet)
  wired to a real Alchemy API call, plus mock-data panels (Timeline, Wallet Health, Airdrop
  Radar, Ask Recall) ready to swap for live data as you build out each feature.
- **API routes** — `/api/wallet/transactions` and `/api/wallet/health` call real Alchemy/Helius
  endpoints server-side (never exposing your API key to the browser).

## What's real vs. mock right now

| Feature | Status |
|---|---|
| Wallet connect (EVM) | **Real.** Uses `ethers.js` + the browser's injected wallet. |
| Alchemy transfer fetch | **Real.** Needs your own `ALCHEMY_API_KEY`. |
| Helius Solana fetch | **Real.** Needs your own `HELIUS_API_KEY`. Solana wallet *connect* isn't wired yet — only EVM connect is. |
| Timeline / Wallet Health / Airdrop Radar / Ask Recall UI | Mock data (`lib/mockData.ts`). The UI and API shape are real; swap the data source once you're ready. |
| AI summaries (Ask Recall, timeline narration) | Not wired — add an OpenAI call in `app/api/` following the same pattern as `lib/alchemy.ts`. |

## Getting started

```bash
npm install
cp .env.example .env.local
# fill in ALCHEMY_API_KEY (and HELIUS_API_KEY if you want Solana) in .env.local
npm run dev
```

Open http://localhost:3000.

To test the real wallet connect + Alchemy call: go to `/dashboard`, click **Connect Wallet**
(needs MetaMask or similar installed), approve the connection, and the app will call
`alchemy_getAssetTransfers` for your address and show a live count.

## Suggested build order (from the original plan)

1. ✅ Wallet connect + basic dashboard (this scaffold)
2. Replace `mockTimeline` with real transfers, normalized into timeline entries
   (buy/sell/transfer/approval/airdrop-claim categorization)
3. Wire `Ask Recall` to an OpenAI call that receives the user's transfer history as context
4. Build out real Wallet Health scoring (approval scanning — Etherscan/Alchemy simulate APIs,
   or a service like GoPlus Security)
5. Airdrop Radar — needs an airdrop eligibility database; start with a curated list of major
   protocols + their claim contracts, check eligibility per connected address
6. Add Solana wallet connect (`@solana/wallet-adapter-react`) alongside the existing EVM flow
7. Persist connected wallets + derived data (Supabase, per the original stack)
8. Auth (Privy/Dynamic) so a "Recall identity" can span multiple wallets

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- ethers.js (client-side wallet connect)
- Alchemy + Helius (server-side chain data)

Not yet wired, per the original plan: Supabase, Privy/Dynamic auth, OpenAI.
