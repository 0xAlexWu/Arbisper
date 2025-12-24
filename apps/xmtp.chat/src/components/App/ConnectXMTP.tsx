import { Button, Group, Paper, Stack } from "@mantine/core";
import { useCallback } from "react";
import { ConnectedAddress } from "@/components/App/ConnectedAddress";
import { LoggingSelect } from "@/components/App/LoggingSelect";
import { NetworkSelect } from "@/components/App/NetworkSelect";
import { useConnectWallet } from "@/hooks/useConnectWallet";
import { useConnectXmtp } from "@/hooks/useConnectXmtp";
import { useEphemeralSigner } from "@/hooks/useEphemeralSigner";
import { useSettings } from "@/hooks/useSettings";
import classes from "./ConnectXMTP.module.css";

export type ConnectXMTPProps = {
  onDisconnectWallet: () => void;
};

export const ConnectXMTP = ({ onDisconnectWallet }: ConnectXMTPProps) => {
  const { isConnected, address } = useConnectWallet();
  const { address: ephemeralAddress } = useEphemeralSigner();
  const { connect, loading } = useConnectXmtp();
  const { ephemeralAccountEnabled } = useSettings();

  const handleConnectClick = useCallback(() => {
    connect();
  }, [connect]);

  return (
    <Paper 
      withBorder 
      radius={0}
      style={{
        background: "#ffffff",
        border: "2px inset #ece9d8",
        boxShadow: "inset 1px 1px 0 #808080, inset -1px -1px 0 #ffffff",
      }}>
      <Stack gap="xs">
        <Stack gap="md" p="md">
          <NetworkSelect />
          <LoggingSelect />
        </Stack>
        <Group
          justify="space-between"
          align="center"
          p="md"
          className={classes.actions}>
          <ConnectedAddress
            size="sm"
            address={address ?? ephemeralAddress}
            onClick={onDisconnectWallet}
          />
          <Group gap="xs" align="center">
            <Button
              disabled={!isConnected && !ephemeralAccountEnabled}
              onClick={handleConnectClick}
              loading={loading}>
              Enter
            </Button>
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
};
