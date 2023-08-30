import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Button,
  Select,
  TextInput,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Add, ArrowDown2, SearchNormal, SearchNormal1 } from "iconsax-react";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();
  return <div></div>;
}
