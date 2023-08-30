import {
  Flex,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Moon, Sun1 } from "iconsax-react";

import { useThemeColor } from "@/hooks";

export const ThemeControl = () => {
  const getRenderedOption = useThemeColor();
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();

  const myStyles = {
    color: getRenderedOption({
      light: theme.colors.blue[9],
      dark: theme.colors.white[9],
    }),
    cursor: "pointer",
  };
  return (
    <Flex
      align="center"
      sx={{ borderRadius: theme.radius.xs }}
      bg={getRenderedOption({
        light: theme.colors.white[0],
        dark: theme.colors.violet[5],
      })}
      py={theme.spacing.sm}
      px={theme.spacing.md}
      gap={theme.spacing.sm}
    >
      <Flex
        sx={{
          ...myStyles,
          ...getRenderedOption({
            light: {
              background: "white",
              boxShadow: theme.shadows.xs,
              borderRadius: theme.radius.xs,
              paddingBlock: theme.spacing.xs,
              paddingInline: theme.spacing.sm,
            },
            dark: {},
          }),
        }}
        gap={theme.spacing.sms}
        align="center"
        onClick={() => toggleColorScheme("light")}
      >
        <Sun1 size="20" variant="Bold" />
        <Title order={4}>Light</Title>
      </Flex>

      <Flex
        sx={{
          color: getRenderedOption({
            light: theme.colors.white[7],
            dark: "#ffffff",
          }),
          cursor: "pointer",
          ...getRenderedOption({
            light: {},
            dark: {
              background: theme.colors.violet[9],
              borderRadius: theme.radius.xs,
              paddingBlock: theme.spacing.xs,
              paddingInline: theme.spacing.sm,
            },
          }),
        }}
        gap={theme.spacing.sms}
        align="center"
        onClick={() => toggleColorScheme("dark")}
      >
        <Moon size="20" variant="Outline" />
        <Title order={4}>Dark</Title>
      </Flex>
    </Flex>
  );
};
