import { useMantineTheme } from "@mantine/core";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    y: 120000,
    utilities: 45000,
    food: 65000,
    transportation: 20000,
    entertainment: 10000,
    amt: 2400,
  },
  {
    name: "Feb",
    y: 90000,
    utilities: 65000,
    food: 45000,
    transportation: 20000,
    entertainment: 10000,
    amt: 2210,
  },
  {
    name: "Mar",
    y: 60000,
    utilities: 45000,
    food: 20000,
    transportation: 65000,
    entertainment: 10000,
    amt: 2290,
  },
  {
    name: "Apr",
    y: 30000,
    utilities: 65000,
    food: 45000,
    transportation: 20000,
    entertainment: 10000,
    amt: 2000,
  },
  {
    name: "May",
    y: 120000,
    utilities: 45000,
    food: 65000,
    transportation: 20000,
    entertainment: 10000,
    amt: 2400,
  },
];

export function SpendChart() {
  const theme = useMantineTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tickLine={false} />
        <YAxis dataKey="y" />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          color=""
        />
        {/* <Legend wrapperStyle={{ top: 0, left: 25 }} /> */}

        <Bar dataKey="food" fill={theme.colors.green[0]} />
        <Bar dataKey="utilities" fill={theme.colors.brand[8]} />
        <Bar dataKey="transportation" fill={theme.colors.red[0]} />
        <Bar dataKey="entertainment" fill={theme.colors.blue[0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
