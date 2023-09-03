import { useThemeColor } from "@/hooks";
import { Flex, Title, useMantineTheme } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

export const Heading = ({ text }: { text: string }) => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Flex gap={theme.spacing.sm} align="center">
      <Title
        order={4}
        fw={theme.other.fontWeight.medium}
        c={theme.colors.white[6]}
      >
        Home
      </Title>
      <ArrowRight2 color={theme.colors.white[6]} size={theme.fontSizes.md} />
      <Title
        order={4}
        fw={theme.other.fontWeight.medium}
        c={getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        })}
      >
        {text}
      </Title>
    </Flex>
  );
};
