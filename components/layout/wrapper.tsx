import React from "react";
import { SideBar } from "./side-bar";
import { Header } from "./header";
import { Box, Flex, useMantineTheme } from "@mantine/core";

import { useThemeColor } from "@/hooks";

export const Wrapper = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const getRenderedOption = useThemeColor();
  const theme = useMantineTheme();
  return (
    <Flex sx={{ height: "100vh", overflow: "auto" }}>
      <SideBar />
      <Box
        component={Flex}
        direction="column"
        bg={getRenderedOption({
          light: "#ffffff",
          dark: theme.colors.violet[7],
        })}
        sx={{ flex: 1, overflow: "auto" }}
      >
        <Header text={text} />
        {children}
      </Box>
    </Flex>
  );
};
