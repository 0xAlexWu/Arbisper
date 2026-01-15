# Arbisper

<div align="center">

<!-- Replace with your actual logo asset path -->
<img src="./assets/arbisper-logo.png" alt="Arbisper Logo" width="120" />

**A decentralized, privacy-first P2P messenger built on the XMTP protocol**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
![Node](https://img.shields.io/badge/node-%3E%3D22-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)

_End-to-end encrypted • Decentralized • Privacy-first_

[Features](#-features) •
[Quick Start](#-quick-start) •
[Tech Stack](#-tech-stack) •
[Development](#-development-guide) •
[Architecture](#-architecture) •
[Security](#-security) •
[Contributing](#-contributing) •
[Links](#-links)

</div>

---

## 📖 Overview

**Arbisper** is a decentralized peer-to-peer messaging application powered by **XMTP (Extensible Message Transport Protocol)**. By marrying blockchain-based identity with end-to-end encryption, Arbisper offers secure, private, and trust-minimized communication—without relying on any centralized messaging server.

### Core tenets

- 🔐 **End-to-end encryption** — only participants can read message content  
- 🌐 **Decentralized transport** — messages propagate through the XMTP network, not a central server  
- 🔑 **Self-sovereign control** — _your keys, your messages_; data ownership stays with you  
- ⚡ **High throughput / low fees** — optimized for the **Arbitrum** ecosystem  

---

## ✨ Features

### Messaging essentials

- 💬 **Real-time messaging** — 1:1 DMs and group chats  
- 👥 **Group management** — create groups, manage roles, add/remove members  
- 📎 **Media & attachments** — text, images, files, and remote attachments  
- 📝 **Rich text** — Markdown rendering for expressive messages  
- ↩️ **Replies** — quote and respond with context  
- 👀 **Read receipts** — delivery/read states when supported  
- 😊 **Reactions** — emoji reactions on messages  
- 🔔 **Notifications** — real-time updates for new activity  

### Web3 integration

- 🌉 **Multi-network support** — Arbitrum One (mainnet), Arbitrum Sepolia (testnet)  
- 👛 **Wallet interoperability** — MetaMask, Coinbase Wallet, WalletConnect, and more  
- 💼 **Smart accounts** — Account Abstraction support (ERC-4337)  
- 🔄 **One-tap network switching** — smoother onboarding for new users  

### UX & configuration

- 🎨 **Modern UI** — a clean, chat-first interface inspired by mainstream messengers  
- 📱 **Responsive layout** — works well on desktop and mobile  
- 🌓 **Theme system** — curated palettes and consistent visual hierarchy  
- ⚙️ **Flexible settings** — customizable network targets, logging levels, and environment flags  

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `>= 22.0.0`  
- **Yarn**: `4.10.3+`  
- **Browser**: a modern Web3-enabled browser (or one with an injected wallet extension)

### Installation

#### 1) Clone the repository

```bash
git clone https://github.com/yourusername/arbisper.git
cd arbisper
```

#### 2) Install dependencies

```bash
yarn install
```

#### 3) Configure environment variables

Create a `.env` file under `apps/xmtp.chat/`:

```bash
VITE_PROJECT_ID=your_walletconnect_project_id
```

> 💡 Obtain a free Project ID from **WalletConnect Cloud**.

#### 4) Start the dev server

```bash
# Option A: run from repo root
yarn workspace @xmtp/xmtp.chat dev

# Option B: run from the app directory
cd apps/xmtp.chat
yarn dev
```

#### 5) Open the app

Visit:

- `http://localhost:5173`

---

## 🛠 Tech Stack

### Frontend

- **React 19** — UI composition  
- **TypeScript 5.9** — static typing & safer refactors  
- **Vite 7** — fast builds & dev experience  
- **React Router 7** — routing and navigation  

### Web3 & messaging

- **XMTP Browser SDK** — protocol integration  
- **Wagmi 2** — Ethereum React hooks  
- **Viem 2** — TypeScript-first Ethereum tooling  
- **WalletConnect** — wallet connection standard  

### UI & rendering

- **Mantine 8** — component system & styling primitives  
- **React Markdown** — Markdown rendering  
- **React Virtuoso** — list virtualization for high-performance message feeds  

### State & data layer

- **Zustand** — lightweight state management  
- **TanStack Query** — caching, fetching, invalidation  
- **Zod** — schema validation and runtime parsing  

### Tooling

- **Turbo** — monorepo orchestration  
- **ESLint** / **Prettier** — quality and consistency  
- **Vitest** — unit testing  
- **Sentry** — error monitoring and observability  

---

## 📁 Project Structure

```text
arbisper/
├── apps/
│   └── xmtp.chat/                 # Main application
│       ├── src/
│       │   ├── components/        # React components
│       │   │   ├── App/           # App-level components
│       │   │   ├── Conversation/  # Conversation views
│       │   │   ├── Conversations/ # Conversation list
│       │   │   └── Messages/      # Message components
│       │   ├── contexts/          # React Context providers
│       │   ├── helpers/           # Utility functions
│       │   ├── hooks/             # Custom hooks
│       │   ├── stores/            # Zustand stores
│       │   └── styles/            # Styling assets
│       └── package.json
├── sdks/
│   ├── browser-sdk/               # XMTP browser SDK
│   └── node-sdk/                  # XMTP Node.js SDK
├── content-types/                 # XMTP content types
│   ├── content-type-text/
│   ├── content-type-reaction/
│   ├── content-type-reply/
│   ├── content-type-read-receipt/
│   ├── content-type-remote-attachment/
│   ├── content-type-markdown/
│   └── ...
└── packages/
    └── xmtp-cli/                  # XMTP command-line tool
```

---

## 💻 Development Guide

### Useful scripts

```bash
# Development
yarn dev

# Build
yarn build
yarn build:all

# Testing
yarn test
yarn typecheck

# Code quality
yarn lint
yarn format
yarn format:check

# Housekeeping
yarn clean
yarn reset
```

### Workflow (recommended)

```bash
# 1) Create a feature branch
git checkout -b feature/your-feature-name

# 2) Develop locally
yarn dev

# 3) Validate
yarn test
yarn typecheck
yarn lint

# 4) Commit & push
git add .
git commit -m "feat: concise, meaningful description"
git push origin feature/your-feature-name
```

### Adding a new XMTP content type

XMTP supports custom message content types. This repository already includes a curated set:

- `content-type-text` — plain text  
- `content-type-reaction` — reactions  
- `content-type-reply` — replies  
- `content-type-read-receipt` — read receipts  
- `content-type-remote-attachment` — remote attachments  
- `content-type-markdown` — Markdown messages  
- `content-type-transaction-reference` — transaction references  
- `content-type-group-updated` — group lifecycle updates  

---

## 🔧 Configuration

### Network settings

Default networks are defined in `src/helpers/chains.ts`:

- **Arbitrum One (mainnet)**  
  - Chain ID: `42161`  
  - RPC: `https://arb1.arbitrum.io/rpc`

- **Arbitrum Sepolia (testnet)**  
  - Chain ID: `421614`  
  - RPC: `https://sepolia-rollup.arbitrum.io/rpc`

### XMTP environments

Arbisper supports multiple XMTP environments:

- `dev` — development  
- `production` — production network  
- `local` — local testing  

You can switch environments in the app settings UI (where available).

### Wallet connectors

Supported connection methods:

- **MetaMask** — browser extension wallet  
- **Coinbase Wallet** — official Coinbase wallet  
- **WalletConnect** — interoperable session-based connector  
- **Injected** — other injected wallets  
- **Ephemeral account** — temporary wallet for experimentation  

---

## 🏗 Architecture

### High-level system view

```text
┌──────────────────────────────────────────┐
│              React Application           │
│  ┌────────────────────────────────────┐  │
│  │              UI Layer              │  │
│  │    (Mantine + Custom Components)   │  │
│  └───────────────┬────────────────────┘  │
│                  │                       │
│  ┌───────────────▼────────────────────┐  │
│  │         State & Data Layer         │  │
│  │   (Zustand + TanStack Query)       │  │
│  └───────────────┬────────────────────┘  │
│                  │                       │
│  ┌───────────────▼────────────────────┐  │
│  │            XMTP Browser SDK        │  │
│  │        (Message Protocol Layer)    │  │
│  └───────────────┬────────────────────┘  │
└──────────────────┼───────────────────────┘
                   │
      ┌────────────▼────────────┐
      │       Wagmi + Viem       │
      │   (Wallet Integration)   │
      └────────────┬────────────┘
                   │
      ┌────────────▼────────────┐
      │      Arbitrum Network    │
      │   (Blockchain Identity)  │
      └─────────────────────────┘
```

### Data flow

_User action_ → UI components  
Components → custom hooks  
Hooks → XMTP SDK / Wagmi  
SDK → on-chain interactions / XMTP network  
Result → state update  
UI → re-render with the latest state

---

## 🔐 Security

### End-to-end encryption

- All messages are encrypted end-to-end via XMTP primitives  
- Private keys never leave the user’s device  
- Wallet signatures are used for authentication and identity binding  

### Best practices

- ✅ Use hardware wallets for substantial holdings  
- ✅ Verify contract addresses and RPC endpoints  
- ✅ Beware of phishing and malicious dApps  
- ✅ Back up your seed phrase securely  
- ✅ Never share private keys or seed phrases  

---

## 🤝 Contributing

Contributions are welcome—issues, discussions, documentation improvements, and code PRs alike.

### How to contribute

1. Fork this repository  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "feat: Add AmazingFeature"
   ```
4. Push to your fork:  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Code conventions

- Follow the existing **ESLint** and **Prettier** configuration  
- Keep TypeScript **strict** and avoid `any` unless justified  
- Write meaningful commit messages  
- Add tests for new behavior where feasible  
- Update docs when you change user-facing behavior  

---

## 📄 License

Licensed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 🔗 Links

- XMTP: https://xmtp.org  
- XMTP Docs: https://xmtp.org/docs  
- Arbitrum: https://arbitrum.io  
- WalletConnect: https://walletconnect.com  

---

## 📞 Contact

Have feedback or questions?

- 📧 Email: `your-email@example.com`  
- 💬 Discord: _Join our community_  
- 🐦 X / Twitter: `@arbisper`  

---

## 🙏 Acknowledgements

- **XMTP** — decentralized messaging primitives  
- **Arbitrum** — scalable L2 infrastructure  
- **Wagmi** — elegant Web3 React hooks  
- **Mantine** — UI building blocks  
- And all contributors and open-source communities that make this possible.

<div align="center">

Built with ❤️ for a decentralized future.

⭐ If you find this project useful, please consider giving it a star! ⭐

</div>
