import { Group, Paper, Stack } from "@mantine/core";
import { ConnectorSelect } from "@/components/App/ConnectorSelect";
import { ConnectWallet } from "@/components/App/ConnectWallet";

export const WalletConnect = () => {
  return (
    <Paper 
      withBorder 
      radius={0}
      style={{
        background: "#ffffff",
        border: "2px inset #ece9d8",
        boxShadow: "inset 1px 1px 0 #808080, inset -1px -1px 0 #ffffff",
      }}>
      <Stack gap={0}>
        <ConnectorSelect />
        <Group align="center" justify="flex-end" flex={1} p="md">
          <ConnectWallet />
        </Group>
      </Stack>
    </Paper>
  );
};
