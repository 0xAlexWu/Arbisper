import { Button, Collapse, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AccountCard } from "@/components/App/AccountCard";
import {
  useConnectWallet,
  type ConnectorString,
} from "@/hooks/useConnectWallet";
import { useSettings } from "@/hooks/useSettings";
import { CoinbaseWallet } from "@/icons/CoinbaseWallet";
import { MetamaskWallet } from "@/icons/MetamaskWallet";
import { WalletConnectWallet } from "@/icons/WalletConnectWallet";
import classes from "./ConnectorSelect.module.css";

export const ConnectorSelect: React.FC = () => {
  const { isConnected, loading } = useConnectWallet();
  const { connector, setConnector, ephemeralAccountEnabled, useSCW } =
    useSettings();
  const [opened, { toggle }] = useDisclosure(false);

  const handleWalletConnect = (connector: ConnectorString) => () => {
    setConnector(connector);
  };

  const isDisabled = isConnected || loading || ephemeralAccountEnabled;

  return (
    <Stack gap={0} className={classes.root}>
      <AccountCard
        selected={connector === "MetaMask"}
        disabled={isDisabled || useSCW}
        icon={<MetamaskWallet />}
        label="MetaMask"
        onClick={handleWalletConnect("MetaMask")}
      />
      <Collapse in={opened}>
        <Stack gap={0}>
          <AccountCard
            selected={connector === "Coinbase Wallet"}
            disabled={isDisabled}
            icon={<CoinbaseWallet />}
            label="Coinbase Wallet"
            onClick={handleWalletConnect("Coinbase Wallet")}
          />
          <AccountCard
            selected={connector === "WalletConnect"}
            disabled={isDisabled}
            icon={<WalletConnectWallet />}
            label="WalletConnect"
            onClick={handleWalletConnect("WalletConnect")}
          />
        </Stack>
      </Collapse>
      <Button
        variant="subtle"
        onClick={toggle}
        style={{ borderRadius: 0 }}
        className={classes.moreButton}>
        {opened ? "Less options" : "More options"}
      </Button>
    </Stack>
  );
};
