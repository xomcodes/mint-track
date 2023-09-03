import { useThemeColor } from "@/hooks";
import { Table, useMantineTheme } from "@mantine/core";

const elements = [
  {
    name: "Movie ticket",
    category: "Entertainment",
    amount: "₦3,000",
    time: "01:20 AM",
    date: "1/12/2023",
  },
  {
    name: "Vacation",
    category: "Goal",
    amount: "₦20,000",
    time: "09:00 AM",
    date: "01/15/2023",
  },
  {
    name: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
  },
  {
    name: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
  },
  {
    name: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
  },
  {
    name: "Fuel",
    category: "Transportation",
    amount: "₦5,000",
    time: "02:30 PM",
    date: "01/22/2023",
  },
];
export function RecentTable() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td className="!border-none !font-semibold ">{element.name}</td>
      <td className="!border-none !font-semibold ">{element.category}</td>
      <td className="!border-none !font-semibold ">{element.amount}</td>
      <td className="!border-none !font-semibold ">{element.time}</td>
      <td className="!border-none !font-semibold ">{element.date}</td>
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
          border: "none",
          ...getRenderedOption({
            light: {
              background: theme.colors.white[0],
              color: theme.colors.blue[9],
            },
            dark: {
              background: theme.colors.violet[0],
              color: "white",
            },
          }),
        }}
      >
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
