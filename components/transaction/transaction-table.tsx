import { useThemeColor } from "@/hooks";
import { Button, Table, useMantineTheme } from "@mantine/core";

const elements = [
  {
    transactionName: "Snacks",
    category: "Food",
    amount: "₦3,000",
    time: "01:20 AM",
    date: "1/12/2023",
    action: "Print",
  },
  {
    transactionName: "Electricity bill",
    category: "Utility",
    amount: "₦5,000",
    time: "01:20 AM ",
    date: "01/15/2023",
    action: "Print",
  },
  {
    transactionName: "Vacation",
    category: "Utilities",
    amount: "₦3,000",
    time: "01:20 AM   ",
    date: "01/15/2023",
    action: "Print",
  },
  {
    transactionName: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
    action: "Print",
  },
  {
    transactionName: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
    action: "Print",
  },
  {
    transactionName: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
    action: "Print",
  },
];
export function TransactionTable() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const rows = elements.map((element) => (
    <tr key={element.transactionName}>
      <td className="!border-none">{element.transactionName}</td>
      <td className="!border-none">{element.category}</td>
      <td className="!border-none">{element.amount}</td>
      <td className="!border-none">{element.time}</td>
      <td className="!border-none">{element.date}</td>
      <td className="!border-none">
        <Button variant="medium">{element.action}</Button>
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
          <th>TRANSACTION NAME</th>
          <th>CATEGORY</th>
          <th>AMOUNT</th>
          <th>TIME</th>
          <th>DATE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
