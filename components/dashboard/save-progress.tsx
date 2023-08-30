import { Flex, Progress } from "@mantine/core";

export function SaveProgress() {
  return (
    <Flex>
      <Progress
        sections={[
          { value: 40, color: "#68b5e8" },
          { value: 15, color: "#6888e8" },
          { value: 15, color: "#8468e8" },
        ]}
      />
    </Flex>
  );
}
