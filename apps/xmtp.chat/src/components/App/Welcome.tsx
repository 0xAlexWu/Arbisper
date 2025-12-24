import {
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMatches,
} from "@mantine/core";
import { Connect } from "@/components/App/Connect";
import logo from "../../../../arilogo.png";

export const Welcome = () => {
  const px = useMatches({
    base: "5%",
    sm: "10%",
  });

  return (
    <Stack gap="xl" py={40} px={px} style={{ marginTop: "132px" }}>
      <Stack gap="md" align="center" className="fade-in-up">
        <Group gap="md" align="center" justify="center">
          <Title order={1}>Welcome to Arbisper</Title>
          <Image
            src={logo}
            alt="Arbisper"
            w="50.4px"
            h="50.4px"
            fit="contain"
            style={{
              marginLeft: "-1mm",
            }}
          />
        </Group>
        <Text fs="italic" size="xl" ta="center">
          A decentralized, cryptographic P2P messaging<br />
          infrastructure powered by XMTP on Arbitrum
        </Text>
      </Stack>
      <div className="fade-in-up-delay-1">
        <Connect />
      </div>
    </Stack>
  );
};
