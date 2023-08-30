import { useThemeColor } from "@/hooks";
import { Box, Flex, Title, rem, useMantineTheme } from "@mantine/core";
import {
  ArrowDown2,
  ArrowDown3,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import React from "react";
import { ProfilePix } from ".";
import Image from "next/image";

export const Header = ({ text }: { text: string }) => {
  const theme = useMantineTheme();
  const getRenderedOption = useThemeColor();
  return (
    <Box
      component="header"
      w="100%"
      py={theme.spacing.lg}
      px={theme.spacing["3xl"]}
      // bg={getRenderedOption({ light: "#ffffff", dark: theme.colors.violet[7] })}
      sx={{
        ...getRenderedOption({
          light: {
            borderBottom: `${rem(1)} solid ${theme.colors.brand[5]}`,
          },
          dark: {},
        }),
      }}
    >
      <Flex justify="space-between " w="100%" align="center">
        <Title
          order={1}
          c={getRenderedOption({ light: theme.colors.blue[9], dark: "white" })}
        >
          {text}
        </Title>

        <Box component={Flex} gap={theme.spacing.xl} align="center">
          <SearchNormal1
            size="20"
            color={theme.colors.blue[5]}
            variant="Outline"
          />
          <Notification size="24" color={theme.colors.blue[5]} variant="Bold" />

          <Box
            component={Flex}
            gap={theme.spacing.sm}
            align="center"
            sx={{
              ...getRenderedOption({
                light: {
                  color: theme.colors.blue[9],
                },
                dark: {
                  paddingBlock: theme.spacing.sm,
                  paddingInline: theme.spacing.md,
                  backgroundColor: theme.colors.violet[3],
                  color: "white",
                  borderRadius: theme.radius.lg,
                },
              }),
            }}
          >
            <Image
              width={40}
              height={40}
              src="/profile-pic.png"
              alt="profile-pic"
            />

            <Title order={5}>Shuaib </Title>

            <ArrowDown2
              size="20"
              variant="Bold"
              style={{
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
