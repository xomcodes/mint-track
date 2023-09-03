import { useThemeColor } from "@/hooks";
import { Button, Flex, Table, useMantineTheme } from "@mantine/core";
import { BsTrash3Fill } from "react-icons/bs";

const elements = [
  {
    item: "Groceries",
    category: "Food",
    budget: "₦100,000",
    spent: "₦20,000",
    remaining: "₦80,000",
    date: "1/10/2023",
    action: "View",
  },

  {
    item: "Subscription",
    category: "Utilities",
    budget: "₦20,000",
    spent: "₦2,000",
    remaining: "₦18,000",
    date: "1/10/2023",
    action: "View",
  },

  {
    item: "Uber ride",
    category: "Transportation",
    budget: "₦15,000",
    spent: "₦5,000",
    remaining: "₦10,000",
    date: "01/15/2023",
    action: "View",
  },
  {
    item: "Shopping",
    category: "Utilities",
    budget: "₦20,000",
    spent: "₦5,000",
    remaining: "₦15,000",
    date: "01/18/2023",
    action: "View",
  },
  {
    item: "Groceries",
    category: "Food",
    budget: "₦100,000",
    spent: "₦20,000",
    remaining: "₦80,000",
    date: "1/10/2023",
    action: "View",
  },
  {
    item: "Groceries",
    category: "Food",
    budget: "₦100,000",
    spent: "₦20,000",
    remaining: "₦80,000",
    date: "1/10/2023",
    action: "View",
  },
];
export function BudgetTable() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const rows = elements.map((element, idx) => (
    <tr key={idx}>
      <td className="!border-none">{element.item}</td>
      <td className="!border-none">{element.category}</td>
      <td className="!border-none">{element.budget}</td>
      <td className="!border-none">{element.spent}</td>
      <td className="!border-none">{element.remaining}</td>
      <td className="!border-none">{element.date}</td>
      <td className="!border-none">
        <Flex gap={theme.spacing.md} align="center">
          <Button variant="small">{element.action}</Button>
          <BsTrash3Fill />
        </Flex>
      </td>
    </tr>
  ));

  return (
    <Table
      fontSize={theme.fontSizes.md}
      sx={{
        fontWeight: theme.other.semibold,
        color: getRenderedOption({
          light: theme.colors.blue[9],
          dark: "white",
        }),
      }}
      horizontalSpacing={theme.spacing.md}
      verticalSpacing={theme.spacing.md}
    >
      <thead
        style={{
          background: getRenderedOption({
            light: theme.colors.white[0],
            dark: theme.colors.violet[0],
          }),
          border: "none",
          //
          color: theme.colors.blue[9],
        }}
      >
        <tr>
          <th>ITEM</th>
          <th>CATEGORY</th>
          <th>BUDGET</th>
          <th>SPENT</th>
          <th>REMAINING</th>
          <th>DATE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
