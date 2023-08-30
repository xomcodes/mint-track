import { Flex, rem, useMantineTheme } from "@mantine/core";
import { Navlinks, ThemeControl } from ".";
import { useThemeColor } from "@/hooks";
import { SiteLogo } from "./site-logo";

export const SideBar = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();

  return (
    <Flex
      w={rem(232)}
      py={theme.spacing["3xl"]}
      px={theme.spacing.smd}
      direction="column"
      justify="space-between"
      bg={getRenderedOption({ light: "#ffffff", dark: theme.colors.brand[2] })}
      sx={{
        ...getRenderedOption({
          light: {
            borderRight: `${rem(1)} solid ${theme.colors.brand[5]}`,
          },
          dark: {},
        }),
      }}
    >
      <Flex direction="column" gap={theme.spacing["2xl"]}>
        <SiteLogo />

        <Navlinks />
      </Flex>

      <ThemeControl />
    </Flex>
  );
};
