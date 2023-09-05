import { useThemeColor } from "@/hooks";
import { SuccessIcon } from "@/shared";
import { Box, Button, Flex, Title, useMantineTheme } from "@mantine/core";
import React from "react";

export const SuccessBudget = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      component={Flex}
      direction="column"
      align="center"
      p={theme.spacing.xl}
      gap={theme.spacing.xl}
      sx={{
        background: getRenderedOption({
          light: "white",
          dark: theme.colors.violet[7],
        }),
      }}
    >
      <SuccessIcon />
      <Title
        order={2}
        fw={theme.other.semibold}
        fs={theme.fontSizes.sm}
        c={getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        })}
      >
        Goal successfully Saved
      </Title>
      <Button variant="large" w="394px">
        Return to Goal Page
      </Button>
    </Box>
  );
};
