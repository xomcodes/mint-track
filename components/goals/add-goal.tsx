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
import { DateInput } from "@mantine/dates";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

export const AddGoal = () => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      p={theme.spacing["2xl"]}
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
        Add New Goal
      </Title>
      <Flex direction="column" gap={theme.spacing.xl}>
        <Box component={Flex} direction="column" gap={theme.spacing.sm}>
          <TextInput
            variant="default"
            label="Goal"
            placeholder="Enter Goal Name"
          />

          {/* <Select
            data={["Food", "Utilities", "Transportation", "Entertainment"]}
            label="Category"
            placeholder="Select Category"
          /> */}

          <DateInput
            dateParser={(input) => {
              if (input === "WW2") {
                return new Date(1939, 8, 1);
              }
              return new Date(input);
            }}
            valueFormat="DD/MM/YYYY"
            label="Target Date"
            placeholder="Select Target Date"
            rightSection={
              <ArrowDown2 variant="Bold" className=" cursor-pointer" />
            }
          />

          <TextInput
            variant="default"
            label=" Target Amount"
            placeholder="Enter  Target Amount"
          />

          <TextInput
            variant="default"
            label=" Saved Amount"
            placeholder="Enter Saved  Amount"
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
