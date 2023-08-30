import { Box, Flex, Text, Title, rem, useMantineTheme } from "@mantine/core";

import React from "react";
import { AddWallet, Wallet } from ".";
import { useThemeColor } from "@/hooks";

export const StatisticsCards = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const cards = [
    {
      icon: <Wallet color={theme.colors.lemon[5]} />,
      heading: "Total balance",
      value: {
        text: "10000",
        color: "white",
      },
      iconBackground: getRenderedOption({
        light: theme.colors.brand[7],
        dark: theme.colors.violet[9],
      }),
      cardBackground: getRenderedOption({
        light: theme.colors.brand[6],
        dark: theme.colors.violet[5],
      }),
    },
    {
      icon: (
        <AddWallet
          color={getRenderedOption({
            light: theme.colors.brand[6],
            dark: "white",
          })}
        />
      ),
      heading: "Total balance",
      value: {
        color: getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        }),
        text: "₦500000",
      },
      iconBackground: getRenderedOption({
        light: theme.colors.white[5],
        dark: theme.colors.violet[9],
      }),
      cardBackground: getRenderedOption({
        light: theme.colors.white[2],
        dark: theme.colors.violet[4],
      }),
    },
    {
      icon: (
        <Wallet
          color={getRenderedOption({
            light: theme.colors.brand[6],
            dark: "white",
          })}
        />
      ),
      heading: "Total balance",
      value: {
        color: getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        }),
        text: "₦150,000",
      },
      iconBackground: getRenderedOption({
        light: theme.colors.white[5],
        dark: theme.colors.violet[9],
      }),
      cardBackground: getRenderedOption({
        light: theme.colors.white[2],
        dark: theme.colors.violet[4],
      }),
    },
  ];

  return (
    <Box
      component={Flex}
      gap={theme.spacing["2xl"]}
      w="100%"
      sx={{ overflowX: "auto" }}
    >
      {cards.map((item, index) => (
        <Flex
          key={index}
          p={theme.spacing.xl}
          align="center"
          //   justify="center"
          gap={theme.spacing.md}
          sx={{
            borderRadius: theme.radius.sm,
            background: item.cardBackground,
            flex: 1,
          }}
        >
          <Box
            component={Flex}
            align="center"
            justify="center"
            w={rem(42)}
            h={rem(42)}
            bg={item.iconBackground}
            sx={{
              borderRadius: theme.radius.lg,
            }}
          >
            {item.icon}
          </Box>

          <Box component={Flex} direction="column" gap={theme.spacing.sm}>
            <Text variant="xs_semibold" c={theme.colors.blue[5]}>
              {item.heading}
            </Text>
            <Title
              order={1}
              sx={{
                color: item.value.color,
              }}
            >
              {item.value.text}{" "}
            </Title>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
