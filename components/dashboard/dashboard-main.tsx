import { Flex, useMantineTheme } from "@mantine/core";
import React from "react";
import { BillPayment, Overview } from ".";

export const DashboardMain = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      px={theme.spacing["2xl"]}
      pt={theme.spacing["2xl"]}
      gap={theme.spacing["3xl"]}
      sx={{ overflow: "auto" }}
    >
      <Overview />
      <BillPayment />
    </Flex>
  );
};
