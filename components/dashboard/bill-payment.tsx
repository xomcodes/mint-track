import { Flex, rem, useMantineTheme } from "@mantine/core";
import React from "react";
import { BillTracker } from "./bill-tracker";
import { SaveGoals } from ".";

export const BillPayment = () => {
  const theme = useMantineTheme();
  return (
    <Flex w={rem(372)} direction="column" h="100vh" gap={theme.spacing["2xl"]}>
      <BillTracker />
      <SaveGoals />
    </Flex>
  );
};
