import { useThemeColor } from "@/hooks";
import { BillGoalsWrapper } from "@/layout";
import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

const trackerList = [
  {
    bill: "Rent",
    status: "Paid",
    date: "01/26/2023",
  },
  {
    bill: "Electricity",
    status: "Unpaid",
    date: "01/30/2023",
  },
  {
    bill: "Subscription",
    status: "Unpaid",
    date: "01/25/2023",
  },
  {
    bill: "Rent",
    status: "Paid",
    date: "01/30/2023",
  },
  {
    bill: "Rent",
    status: "Paid",
    date: "01/28/2023",
  },
];

export const BillTracker = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <BillGoalsWrapper heading="Bill Payment Tracker" link="/tracker">
      <Box
        component={Flex}
        gap={theme.spacing.sm}
        direction="column"
        p={theme.spacing.sm}
      >
        {trackerList.map((item, index) => (
          <Flex key={index} justify="space-between" align="center" w="100%">
            <Box component={Flex} direction="column" gap={theme.spacing.xs}>
              <Title
                order={5}
                c={getRenderedOption({
                  light: theme.colors.blue[9],
                  dark: "white",
                })}
                sx={{ fontWeight: theme.other.medium }}
              >
                {item.bill}
              </Title>
              <Text c={theme.colors.blue[5]}>{item.date}</Text>
            </Box>

            {item.status === "Paid" ? (
              <Text color={theme.colors.green[1]}> {item.status}</Text>
            ) : (
              <Text color={theme.colors.red[6]}> {item.status}</Text>
            )}
          </Flex>
        ))}
      </Box>
    </BillGoalsWrapper>
  );
};
