import { useThemeColor } from "@/hooks";
import {
  Box,
  Button,
  Flex,
  Select,
  TextInput,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

export const AddBudget = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      p={theme.spacing.xl}
      align="center"
      component={Flex}
      direction="column"
      gap={theme.spacing.xl}
      sx={{
        background: getRenderedOption({
          light: "white",
          dark: theme.colors.violet[7],
        }),
      }}
    >
      <Title
        order={2}
        fs={theme.fontSizes.md}
        fw={theme.other.semibold}
        c={getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        })}
      >
        Add A New Budget
      </Title>
      <Flex direction="column" gap={theme.spacing.md}>
        <Box component={Flex} direction="column" gap={theme.spacing.sm}>
          <Select
            data={["January", "Febuary", "March", "April", "May"]}
            label="Month"
            placeholder="Select Month"
          />

          <TextInput
            variant="default"
            label="Amount"
            placeholder="Enter Amount"
          />

          <Select
            data={["Food", "Utilities", "Transportation", "Entertainment"]}
            label="Category"
            placeholder="Select Category"
          />

          <TextInput
            variant="default"
            label=" Category Amount"
            placeholder="Enter Amount"
          />

          <Select
            data={["100,000", "80,000", "60,000", "40,000", "20,000", "10,000"]}
            label="Category Limit"
            placeholder="Select Category Limit"
          />
          <TextInput variant="default" label="Item" placeholder="Add Item" />
          <TextInput
            variant="default"
            label=" Item Amount"
            placeholder="Enter Item  Amount"
          />
        </Box>

        <Box component={Flex} gap={theme.spacing.sm}>
          <Button w={rem(378)} variant="outline" fw={theme.other.semibold}>
            Cancel
          </Button>
          <Button w={rem(378)} variant="large" fw={theme.other.semibold}>
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
