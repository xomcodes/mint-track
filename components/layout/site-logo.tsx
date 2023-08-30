import { Box, Flex, Title, useMantineTheme } from "@mantine/core";

import { useThemeColor } from "@/hooks";
import { Logo, LogoWhite } from ".";

export const SiteLogo = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Flex gap={theme.spacing.xs} align="center" justify="center">
      {getRenderedOption({
        light: <Logo />,
        dark: <LogoWhite />,
      })}
      <Title
        order={2}
        fz={theme.fontSizes.lg}
        sx={{
          color: getRenderedOption({
            light: theme.colors.brand[4],
            dark: "white",
          }),
        }}
      >
        Mint
        <Box
          component="span"
          sx={{
            color: getRenderedOption({
              light: theme.colors.brand[3],
              dark: "white",
            }),
          }}
        >
          Track
        </Box>
      </Title>
    </Flex>
  );
};
