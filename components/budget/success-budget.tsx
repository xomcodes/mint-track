import { useThemeColor } from "@/hooks";
import { Box, Flex, useMantineTheme } from "@mantine/core";
import React from "react";

export const SuccessBudget = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      component={Flex}
      direction="column"
      p={theme.spacing.xl}
      sx={{
        background: getRenderedOption({
          light: "white",
          dark: theme.colors.violet[7],
        }),
      }}
    ></Box>
  );
};
