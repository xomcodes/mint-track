import { useThemeColor } from "@/hooks";
import { Wrapper } from "@/layout";
import { SearchSectiion } from "@/shared";
import { TransactionTable } from "@/transaction";
import { Box, Flex, Title, useMantineTheme } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

function Transaction() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Wrapper text="Transaction">
      <Box
        component={Flex}
        direction="column"
        gap={theme.spacing["4xl"]}
        py={theme.spacing["2xl"]}
        px={theme.spacing["3xl"]}
        sx={{
          overflow: "auto",
        }}
      >
        <Flex gap={theme.spacing.sm} align="center">
          <Title
            order={4}
            fw={theme.other.fontWeight.medium}
            c={theme.colors.white[6]}
          >
            Home
          </Title>
          <ArrowRight2
            color={theme.colors.white[6]}
            size={theme.fontSizes.md}
          />
          <Title
            order={4}
            fw={theme.other.fontWeight.medium}
            c={getRenderedOption({
              light: theme.colors.blue[9],
              dark: "white",
            })}
          >
            Transaction
          </Title>
        </Flex>

        <SearchSectiion />

        <TransactionTable />
      </Box>
    </Wrapper>
  );
}

export default Transaction;
