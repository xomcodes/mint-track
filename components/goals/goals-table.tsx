import { useThemeColor } from "@/hooks";
import { Button, Flex, Table, useMantineTheme } from "@mantine/core";
import { BsTrash3Fill } from "react-icons/bs";

const elements = [
  {
    goal_name: "Emergency fund",
    target_amount: "₦300,000",
    target_savings: "₦100,000",
    saved: "₦200,000",
    progress: "66.67%",
    date: "1/10/2023",
    action: "View",
  },

  {
    goal_name: "Vacation Fund",
    target_amount: "₦200,000",
    target_savings: "₦100,000",
    saved: "₦150,000",
    progress: "75%",
    date: "1/13/2023",
    action: "View",
  },
  {
    goal_name: "Car Down Payment",
    target_amount: "₦500,000",
    target_savings: "₦250,000",
    saved: "₦250,000",
    progress: "50%",
    date: "1/13/2023",
    action: "View",
  },
  {
    goal_name: "Home Improvement",
    target_amount: "₦200,000",
    target_savings: "₦120,000",
    saved: "₦80,000",
    progress: "50%",
    date: "1/13/2023",
    action: "View",
  },
  {
    goal_name: "Vacation Fund",
    target_amount: "₦200,000",
    target_savings: "₦100,000",
    saved: "₦150,000",
    progress: "75%",
    date: "1/13/2023",
    action: "View",
  },
  {
    goal_name: "Car Down Payment",
    target_amount: "₦500,000",
    target_savings: "₦250,000",
    saved: "₦250,000",
    progress: "50%",
    date: "1/13/2023",
    action: "View",
  },
];
export function GoalsTable() {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  const rows = elements.map((element, idx) => (
    <tr key={idx}>
      <td className="!border-none !font-semibold ">{element.goal_name}</td>
      <td className="!border-none !font-semibold">{element.target_amount}</td>
      <td className="!border-none !font-semibold ">{element.target_savings}</td>
      <td className="!border-none !font-semibold">{element.saved}</td>
      <td className="!border-none !font-semibold">{element.progress}</td>
      <td className="!border-none !font-semibold">{element.date}</td>

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
          <th>GOAL NAME</th>
          <th>TARGET AMOUNT</th>
          <th>TARGET SAVINGS</th>
          <th>SAVED</th>
          <th>PROGRESS</th>
          <th>DATE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
