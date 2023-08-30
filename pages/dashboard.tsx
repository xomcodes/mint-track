import { DashboardMain } from "@/dashboard";
import { Wrapper } from "@/layout";
import { Flex } from "@mantine/core";
import React from "react";

function Dashboard() {
  return (
    <Wrapper text="Dashboard">
      <DashboardMain />
    </Wrapper>
  );
}

export default Dashboard;
