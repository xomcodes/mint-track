import { Flex, useMantineTheme } from "@mantine/core";
import React from "react";

import { SpendOverview } from "./spend-overview";
import { StatisticsCards } from "./statistics-cards";
import { ResentTransactions } from ".";

export const Overview = () => {
  const theme = useMantineTheme();

  return (
    <Flex sx={{ flex: 1 }} gap={theme.spacing["2xl"]} direction="column">
      <StatisticsCards />
      <SpendOverview />
      <ResentTransactions />
    </Flex>
  );
};
