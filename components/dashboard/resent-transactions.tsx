import { useThemeColor } from "@/hooks";
import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import React from "react";
import { RecentTable } from "./recent-table";

export const ResentTransactions = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();

  return (
    <Flex
      direction="column"
      p={theme.spacing.md}
      gap={theme.spacing.md}
      bg={getRenderedOption({
        light: "",
        dark: theme.colors.violet[4],
      })}
      style={{ overflow: "auto", borderRadius: theme.radius.md }}
    >
      <Box component={Flex} justify="space-between">
        <Title
          order={2}
          fw={theme.other.semibold}
          c={getRenderedOption({
            light: theme.colors.blue[9],
            dark: "white",
          })}
        >
          Recent Transaction
        </Title>

        <Flex gap={theme.spacing.sm} c={theme.colors.green[1]} align="center">
          <Text variant="sm_normal">See All</Text>
          <ArrowRight2 size="18" variant="Outline" />
        </Flex>
      </Box>

      <Box style={{ overflowX: "auto" }}>
        <RecentTable />
      </Box>
    </Flex>
  );
};
