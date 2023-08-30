import { Mm } from "@/budget";

import { Wrapper } from "@/layout";
import { useMantineTheme } from "@mantine/core";
import React from "react";

function Budget() {
  // const {theme} = useMantineTheme()
  return (
    <Wrapper text="Dashboard">
      <Mm />
    </Wrapper>
  );
}

export default Budget;
