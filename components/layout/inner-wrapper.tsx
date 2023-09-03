import { Box, Flex, useMantineTheme } from "@mantine/core";
import React from "react";

export const InnerWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  return (
    <Box
      component={Flex}
      direction="column"
      gap={theme.spacing["4xl"]}
      py={theme.spacing["2xl"]}
      px={theme.spacing["3xl"]}
    >
      {children}
    </Box>
  );
};
