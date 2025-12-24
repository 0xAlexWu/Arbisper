import "@mantine/core/styles.css";
import "@/styles/pixel-art.css";
import { createTheme, MantineProvider } from "@mantine/core";
import * as Sentry from "@sentry/react";
import { QueryClientProvider } from "@tanstack/react-query";
import pkg from "@xmtp/browser-sdk/package.json";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
} from "wagmi/chains";
import {
  coinbaseWallet,
  injected,
  metaMask,
  walletConnect,
} from "wagmi/connectors";
import { App } from "@/components/App/App";
import { XMTPProvider } from "@/contexts/XMTPContext";
import { queryClient } from "@/helpers/queries";

Sentry.init({
  dsn: "https://ba2f58ad2e3d5fd09cd8aa36038b950f@o4504757119680512.ingest.us.sentry.io/4510308912005120",
  // ensure no data collection except errors
  enableLogs: false,
  profilesSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  replaysSessionSampleRate: 0,
  sendDefaultPii: false,
  tracesSampleRate: 0,
});

export const config = createConfig({
  connectors: [
    injected(),
    coinbaseWallet({
      appName: "Arbisper",
    }),
    metaMask(),
    walletConnect({ projectId: import.meta.env.VITE_PROJECT_ID }),
  ],
  chains: [
    arbitrum,
    arbitrumSepolia,
  ],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
});

const theme = createTheme({
  primaryColor: "blue",
  colors: {
    blue: [
      "#e6f4ff",
      "#b3d9ff",
      "#80bfff",
      "#4da5ff",
      "#32a2eb",
      "#1a8cd8",
      "#0d73b3",
      "#005a8f",
      "#004166",
      "#00283d",
    ],
  },
  fontFamily: "'Tahoma', 'MS Sans Serif', 'Segoe UI', sans-serif",
  fontSizes: {
    xxs: "calc(0.6875rem * var(--mantine-scale))",
  },
  lineHeights: {
    xxs: "1.2",
  },
  spacing: {
    xxs: "calc(0.5rem * var(--mantine-scale))",
    xxxs: "calc(0.25rem * var(--mantine-scale))",
  },
  defaultRadius: 0,
  components: {
    Button: {
      defaultProps: {
        style: {
          imageRendering: "pixelated",
        },
      },
    },
    Paper: {
      defaultProps: {
        style: {
          imageRendering: "pixelated",
        },
      },
    },
    Card: {
      defaultProps: {
        style: {
          imageRendering: "pixelated",
        },
      },
    },
    TextInput: {
      defaultProps: {
        style: {
          imageRendering: "pixelated",
        },
      },
    },
    Select: {
      defaultProps: {
        style: {
          imageRendering: "pixelated",
        },
      },
    },
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="auto" theme={theme}>
        <XMTPProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </XMTPProvider>
      </MantineProvider>
    </QueryClientProvider>
  </WagmiProvider>,
);

console.log("[xmtp.chat] XMTP Browser SDK version:", pkg.version);
