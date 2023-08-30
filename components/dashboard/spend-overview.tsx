import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { Dot, ResentTransactions, SpendChart } from ".";
import { useThemeColor } from "@/hooks";
import { ArrowDown2 } from "iconsax-react";

export const SpendOverview = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();

  const spendingList = [
    {
      icon: <Dot color={theme.colors.green[0]} />,
      text: "Food",
    },
    {
      icon: <Dot color={theme.colors.brand[8]} />,
      text: "Utilities",
    },
    {
      icon: <Dot color={theme.colors.red[0]} />,
      text: "Transportation",
    },
    {
      icon: <Dot color={theme.colors.blue[0]} />,
      text: "Entertainment",
    },
  ];

  return (
    <Flex
      py={theme.spacing.md}
      px={theme.spacing.xl}
      direction="column"
      gap={theme.spacing.xl}
      h="350px"
      bg={getRenderedOption({
        light: "",
        dark: theme.colors.violet[4],
      })}
      sx={{
        borderRadius: theme.radius.md,
      }}
    >
      <Box component={Flex} justify="space-between">
        <Title
          order={2}
          c={getRenderedOption({
            light: theme.colors.blue[9],
            dark: "white",
          })}
        >
          Spending Overview
        </Title>
        {/* <Flex gap={theme.spacing.sm}>
          {spendingList.map((item) => (
            <Box
              key={item.text}
              component={Flex}
              gap={theme.spacing.sm}
              align="center"
            >
              {item.icon}
              {item.text}
            </Box>
          ))}
        </Flex> */}

        <Box
          component={Flex}
          gap={theme.spacing.sms}
          py={theme.spacing.xsm}
          pl={theme.spacing.sms}
          pr={theme.spacing.sm}
          c={getRenderedOption({
            light: theme.colors.blue[3],
            dark: "white",
          })}
          bg={getRenderedOption({
            light: theme.colors.white[8],
            dark: theme.colors.violet[5],
          })}
          sx={{
            borderRadius: theme.radius.xxs,
          }}
        >
          <Text variant="xs_semibold">All months</Text>
          <ArrowDown2 variant="Outline" size={18} cursor="pointer" />
        </Box>
      </Box>

      <Flex h="100%" sx={{ flex: 1 }}>
        <SpendChart />
      </Flex>
    </Flex>
  );
};
