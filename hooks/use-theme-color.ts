import { useMantineTheme } from "@mantine/core";

export const useThemeColor = () => {
  const theme = useMantineTheme();
  const getRenderedOption = ({ light, dark }: { light: any; dark: any }) => {
    if (theme.colorScheme === "light") return light;
    return dark;
  };

  return getRenderedOption;
};
