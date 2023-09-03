import { GoalsTable } from "@/goals";
import { useThemeColor } from "@/hooks";
import { InnerWrapper, Wrapper } from "@/layout";
import { SearchFilter } from "@/shared";
import { Heading } from "@/shared/heading";
import { useMantineTheme } from "@mantine/core";

import React from "react";

function Goals() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Wrapper text="Goal">
      <InnerWrapper>
        <Heading text="Goals" />

        <SearchFilter text="Add New Goals" />

        <GoalsTable />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Goals;
