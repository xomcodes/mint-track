import { Box, Title, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";

import { getValueOrFallback } from "@/utils";
import { BudgetIcon, DashboardIcon, GoalsIcon, TransactionIcon } from ".";

interface INavLinkitem {
  icon: JSX.Element;
  text: string;
  link: string;
}

const sideList = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/dashboard",
  },

  {
    icon: <TransactionIcon />,
    text: "Transaction",
    link: "/transaction",
  },

  {
    icon: <BudgetIcon />,
    text: "Budget",
    link: "/budget",
  },

  {
    icon: <GoalsIcon />,
    text: "Goals",
    link: "/goals",
  },
];

export const Navlinks = () => {
  const theme = useMantineTheme();
  const { pathname } = useRouter();
  return sideList.map((item) => (
    <Box
      component={Link}
      key={item.text}
      p={theme.spacing.md}
      display="flex"
      sx={{
        gap: theme.spacing.lg,
        borderRadius: theme.radius.xs,
        alignItems: "center",
        textDecoration: "none",
      }}
      href={item.link}
      c={getValueOrFallback({
        checkValue: pathname.includes(item.link),
        valueWhenTrue: theme.colors.blue[9],
        valueWhenFalse: theme.colors.blue[5],
      })}
      bg={getValueOrFallback({
        checkValue: pathname.includes(item.link),
        valueWhenTrue: theme.colors.lemon[5],
        valueWhenFalse: "transparent",
      })}
    >
      {item.icon}
      <Title order={4}>{item.text}</Title>
    </Box>
  ));
};
