import { useThemeColor } from "@/hooks";
import {
  Box,
  Flex,
  Text,
  TextInput,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { ArrowDown2, SearchNormal1 } from "iconsax-react";
import React from "react";

export const SearchSectiion = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      component={Flex}
      justify="space-between"
      align="center"
      gap={theme.spacing["3xl"]}
    >
      <TextInput
        variant="search"
        placeholder="Search Item"
        icon={<SearchNormal1 size="20" color={theme.colors.blue[5]} />}
        w="369px"
        sx={{}}
      />

      <Flex gap={theme.spacing.sm} align="center">
        <Text
          variant="md_medium"
          c={getRenderedOption({
            light: theme.colors.blue[9],
            dark: "white",
          })}
        >
          Filter Budget by:
        </Text>

        <Box
          px={theme.spacing.md}
          py={theme.spacing.sm}
          gap={theme.spacing.sm}
          component={Flex}
          align="center"
          justify="space-between"
          sx={{
            cursor: "pointer",
            borderRadius: theme.radius.xs,
            ...getRenderedOption({
              light: {
                background: theme.colors.white[0],
                border: `${rem(1)} solid ${theme.colors.brand[0]} `,

                color: theme.colors.blue[5],
              },
              dark: {
                background: theme.colors.violet[5],
                border: "",
                color: "white",
              },
            }),
          }}
        >
          <Text>All Category</Text>
          <ArrowDown2 size="20" variant="Bold" />
        </Box>

        <Box
          px={theme.spacing.md}
          py={theme.spacing.sm}
          component={Flex}
          align="center"
          gap={theme.spacing.sm}
          sx={{
            cursor: "pointer",
            borderRadius: theme.radius.xs,
            ...getRenderedOption({
              light: {
                background: theme.colors.white[0],
                border: `${rem(1)} solid ${theme.colors.brand[0]} `,

                color: theme.colors.blue[5],
              },
              dark: {
                background: theme.colors.violet[5],
                border: "",
                color: "white",
              },
            }),
          }}
        >
          <Text>John</Text>
          <ArrowDown2 size="20" variant="Bold" />
        </Box>
      </Flex>
    </Box>
  );
};
