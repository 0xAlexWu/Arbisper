import { Group, Stack, Text } from "@mantine/core";

export const NetworkSelect: React.FC = () => {
  return (
    <Stack gap="xs">
      <Group gap="xs" justify="space-between">
        <Text fw="bold" size="lg">
          Network
        </Text>
        <Text
          size="lg"
          fw="bold"
          style={{
            color: "#006400",
            fontStyle: "italic",
          }}>
          health
        </Text>
      </Group>
    </Stack>
  );
};
