import { useThemeColor } from "@/hooks";
import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

export const BillGoalsWrapper = ({
  heading,
  children,
  link,
}: {
  heading: string;
  children: React.ReactNode;
  link: string;
}) => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Flex
      direction="column"
      p={theme.spacing.md}
      gap={theme.spacing.md}
      bg={getRenderedOption({
        light: "",
        dark: theme.colors.violet[4],
      })}
      w="100%"
      style={{
        borderRadius: theme.radius.md,
        overflow: "auto",
        // height: "40vh",
      }}
    >
      <Box component={Flex} justify="space-between">
        <Title
          order={2}
          fw={theme.other.semibold}
          c={getRenderedOption({
            light: theme.colors.blue[9],
            dark: "white",
          })}
        >
          {heading}
        </Title>

        <Box
          component={Link}
          c={theme.colors.green[1]}
          href={link}
          display="flex"
          sx={{
            gap: theme.spacing.sm,
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Text variant="sm_normal">See All</Text>
          <ArrowRight2 size="18" variant="Outline" />
        </Box>
      </Box>
      {children}
    </Flex>
  );
};
