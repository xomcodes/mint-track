import { InnerWrapper, Wrapper } from "@/layout";
import { SearchFilter, SearchSectiion } from "@/shared";
import { Heading } from "@/shared/heading";
import { useMantineTheme } from "@mantine/core";

import React from "react";
import { useThemeColor } from "@/hooks";
import { BudgetTable } from "@/budget";
import { MintrackModal } from "@/modals";
import { useDisclosure } from "@mantine/hooks";
import { AddBudget } from "@/budget/add-budget";

function Budget() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <Wrapper text="Budget">
      <InnerWrapper>
        <Heading text="Budget" />
        <SearchFilter text="Add New Budget" />
        <BudgetTable />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Budget;
