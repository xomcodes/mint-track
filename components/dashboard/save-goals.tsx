import { useThemeColor } from "@/hooks";
import {
  Box,
  Flex,
  Progress,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

import React from "react";
import { Slash } from ".";
import { BillGoalsWrapper } from "@/layout";

const goalsArr = [
  {
    heading: "Vacation Fund",
    percentage: "75%",
    debit: "₦150,000",
    credit: "₦200,000",
    date: "08/31/2023",
    valueDebit: 25,
    valueCredit: 75,
  },

  {
    heading: "Car Down Payment",
    percentage: "80%",
    debit: "₦400,000",
    credit: "₦500,000",
    date: "02/28/2024",
    valueDebit: 20,
    valueCredit: 80,
  },

  {
    heading: "Home Improvement",
    percentage: "60%",
    debit: "₦120,000",
    credit: "₦200,000",
    date: "10/31/2023",
    valueDebit: 40,
    valueCredit: 60,
  },

  {
    heading: "Vacation Fund",
    percentage: "75%",
    debit: "₦150,000",
    credit: "₦200,000",
    date: "08/31/2023",
    valueDebit: 25,
    valueCredit: 75,
  },

  {
    heading: "Car Down Payment",
    percentage: "80%",
    debit: "₦400,000",
    credit: "₦500,000",
    date: "02/28/2024",
    valueDebit: 20,
    valueCredit: 80,
  },
];

export const SaveGoals = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <BillGoalsWrapper heading="Saving Goals" link="/goals">
      {goalsArr.map((item, index) => (
        <Flex
          key={index}
          gap={theme.spacing.sm}
          direction="column"
          p={theme.spacing.sm}
        >
          <Box component={Flex} justify="space-between" align="center">
            <Title
              order={5}
              fz={theme.other.medium}
              c={getRenderedOption({
                light: theme.colors.blue[9],
                dark: "white",
              })}
            >
              {item.heading}
            </Title>
            <Title
              order={5}
              fz={theme.other.normal}
              c={getRenderedOption({
                light: theme.colors.blue[9],
                dark: "white",
              })}
            >
              {item.percentage}
            </Title>
          </Box>

          <Progress
            style={{
              paddingBlock: theme.spacing.sm,
            }}
            h="12px"
            sections={[
              { value: item.valueCredit, color: theme.colors.green[1] },
              { value: item.valueDebit, color: theme.colors.yellow[5] },
            ]}
          />

          <Box component={Flex} justify="space-between" align="center">
            <Flex gap={theme.spacing.xs}>
              <Text variant="sm_normal" c={theme.colors.red[6]}>
                {item.debit}
              </Text>
              <Slash
                color={getRenderedOption({
                  light: theme.colors.white[9],
                  dark: theme.colors.white[7],
                })}
              />

              <Text variant="sm_normal" c={theme.colors.green[1]}>
                {item.credit}
              </Text>
            </Flex>

            <Text variant="xs_normal" c={theme.colors.blue[5]}>
              08/31/2023
            </Text>
          </Box>
        </Flex>
      ))}
    </BillGoalsWrapper>
  );
};
