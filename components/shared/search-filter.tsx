import { SuccessBudget } from "@/budget";
import { AddBudget } from "@/budget/add-budget";
import { AddGoal } from "@/goals";
import { useThemeColor } from "@/hooks";
import { MintrackModal } from "@/modals";
import {
  Box,
  Button,
  Flex,
  Text,
  TextInput,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2, SearchNormal1 } from "iconsax-react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const SearchFilter = ({ text }: { text: string }) => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const [opened, { open, close }] = useDisclosure();

  return (
    <Flex justify="space-between" align="center">
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

      <Button
        onClick={open}
        variant="outline"
        leftIcon={
          <AiOutlinePlus
            color={getRenderedOption({
              light: theme.colors.blue[9],
              dark: "white",
            })}
          />
        }
        sx={{
          ...getRenderedOption({
            light: {
              color: theme.colors.blue[9],
            },
            dark: {
              border: `${rem(1)} solid white`,
              color: "white",
            },
          }),
        }}
      >
        {text}
      </Button>

      <MintrackModal opened={opened} close={close}>
        {/* <AddBudget /> */}
        {/* <AddGoal /> */}
        <SuccessBudget />
      </MintrackModal>
    </Flex>
  );
};
