import { Box, Progress, Stack, Text } from "@mantine/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { ConnectXMTP } from "@/components/App/ConnectXMTP";
import { WalletConnect } from "@/components/App/WalletConnect";
import { useXMTP } from "@/contexts/XMTPContext";
import { useConnectWallet } from "@/hooks/useConnectWallet";
import { useConnectXmtp } from "@/hooks/useConnectXmtp";
import { useRedirect } from "@/hooks/useRedirect";
import { useSettings } from "@/hooks/useSettings";

export const Connect = () => {
  const { isConnected, disconnect, loading } = useConnectWallet();
  const {
    environment,
    ephemeralAccountEnabled,
    setEphemeralAccountEnabled,
    setAutoConnect,
  } = useSettings();
  const { client } = useXMTP();
  const { loading: connectingXmtp } = useConnectXmtp();
  const navigate = useNavigate();
  const { redirectUrl, setRedirectUrl } = useRedirect();
  const [active, setActive] = useState(0);
  const [connectionStage, setConnectionStage] = useState<
    "idle" | "connecting" | "ready"
  >("idle");

  // redirect if there's already a client
  useEffect(() => {
    if (client) {
      if (redirectUrl) {
        setRedirectUrl("");
        void navigate(redirectUrl);
      } else {
        void navigate(`/${environment}`);
      }
    }
  }, [client, environment]);

  useEffect(() => {
    if (isConnected || ephemeralAccountEnabled) {
      setActive(1);
    } else {
      setActive(0);
    }
  }, [isConnected, ephemeralAccountEnabled]);

  // handle connection stages
  useEffect(() => {
    if (connectingXmtp) {
      setConnectionStage("connecting");
      const timer = setTimeout(() => {
        setConnectionStage("ready");
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!client && (isConnected || ephemeralAccountEnabled)) {
      setConnectionStage("idle");
    }
  }, [connectingXmtp, client, isConnected, ephemeralAccountEnabled]);

  const handleDisconnectWallet = useCallback(() => {
    if (isConnected) {
      disconnect();
    } else {
      setEphemeralAccountEnabled(false);
    }
    setAutoConnect(false);
  }, [isConnected, disconnect]);

  const { progress, statusText } = useMemo(() => {
    if (client) {
      return { progress: 100, statusText: "Connected to XMTP" };
    }
    if (connectionStage === "ready") {
      return { progress: 100, statusText: "You are ready to enter" };
    }
    if (connectionStage === "connecting") {
      return { progress: 50, statusText: "connecting to xmtp" };
    }
    if (isConnected || ephemeralAccountEnabled) {
      return { progress: 0, statusText: "No one will know your secret here" };
    }
    return { progress: 0, statusText: "No one will know your secret here" };
  }, [client, connectionStage, isConnected, ephemeralAccountEnabled]);

  return (
    <Stack gap={0}>
      {active === 0 && <WalletConnect />}
      {active === 1 && <ConnectXMTP onDisconnectWallet={handleDisconnectWallet} />}
      <Box
        style={{
          position: "relative",
          background: "#ece9d8",
          height: "32px",
        }}>
        <Progress
          value={progress}
          color="#32a2eb"
          size="xl"
          radius={0}
          style={{
            height: "100%",
            border: "none",
            boxShadow: "none",
          }}
          transitionDuration={800}
        />
        <Text
          size="sm"
          ta="center"
          className={connectionStage === "ready" ? "blink-text" : ""}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            color:
              connectionStage === "ready"
                ? "#000000"
                : progress > 50
                  ? "#ffffff"
                  : "#000000",
            textShadow:
              connectionStage === "ready"
                ? "none"
                : progress > 50
                  ? "1px 1px 2px rgba(0, 0, 0, 0.5)"
                  : "none",
            zIndex: 1,
            fontFamily: "'Tahoma', 'MS Sans Serif', 'Segoe UI', sans-serif",
            fontSize: "11px",
            fontWeight: "normal",
          }}>
          {statusText}
        </Text>
      </Box>
    </Stack>
  );
};
