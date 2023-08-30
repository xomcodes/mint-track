import {
  ButtonStylesParams,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  createEmotionCache,
  rem,
} from "@mantine/core";
import { useTheme } from "next-themes";
import React, { ReactNode, useState } from "react";

function Provider({
  children,
  colorScheme,
  toggleColorScheme,
}: {
  children: ReactNode;
  toggleColorScheme: (value?: ColorScheme) => void;
  colorScheme: ColorScheme;
}) {
  const cache = createEmotionCache({
    key: "minttrack",
    prepend: true,
  });
  return (
    <ColorSchemeProvider
      colorScheme="light"
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        emotionCache={cache}
        theme={{
          primaryColor: "lemon",
          primaryShade: 5,
          colorScheme: colorScheme,
          colors: {
            white: [
              "#F4F4F4",
              "#F3F3F3",
              "#EEEDED",
              "#E6E4E4",
              "#808080",
              "#D9D7D7",
              "#C5C4C4",
              "#9A9999",
              "#F8F8F8",
              "#5B5A5A",
            ],

            blue: [
              "#3388FF",
              "#D2D5D7",
              "#BDC0C4",
              "#1B212D",
              "#8C9198",
              "#6F767E",
              "#656B73",
              "#4F5459",
              "#212121",
              "#05162E",
            ],
            brand: [
              "#EBECEC",
              "#808281",
              "#1E1C30",
              "#001B2E",
              "#23001E",
              "#F2F2F2",
              "#343A3F",
              "#4B4D4F",
              "#6F6D80",
            ],

            violet: [
              "#2D2E37",
              "#BCBBC4",
              "#9C9BA8",
              "#292642",
              "#201E34",
              "#282541",
              "#24223B",
              "#1C1A2E",
              "#161424",
              "#353255",
            ],

            green: [
              "#1BD47B",
              "#199430",
              "#8DBD8D",
              "#5A9F5A",
              "#398D39",
              "#087008",
              "#076607",
              "#065006",
              "#043E04",
              "#032F03",
            ],

            yellow: [
              "#FFFBE6",
              "#FFF3B0",
              "#FFED8A",
              "#FFE454",
              "#FFDF33",
              "#FFD700",
              "#E8C400",
              "#B59900",
              "#8C7600",
              "#6B5A00",
            ],
            red: [
              "#FF2C2C",
              "#B06F6F",
              "#B05555",
              "#AC4141",
              "#A92F2F",
              "#A71C1C",
              "#A80A0A",
              "#891717",
              "#711F1F",
              "#5E2323",
            ],

            lemon: [
              "#F8F9F4",
              "#E6EBD5",
              "#D8E2B6",
              "#CEDE94",
              "#C8E26F",
              "#C8EE44",
              "#B5D83C",
              "#A0BE3A",
              "#8A9F40",
              "#778742",
            ],
          },
          components: {
            Button: {
              variants: {
                medium(theme, params: ButtonStylesParams, context) {
                  return {
                    root: {
                      width: rem(142),
                      height: rem(49),
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.blue[9],
                      borderRadius: theme.radius.xs,
                      background: theme.colors.lemon[5],
                    },
                    label: {
                      fontWeight: theme.other.fontWeight.semibold,
                    },
                  };
                },

                small(theme, params, context) {
                  return {
                    root: {
                      width: rem(79),
                      height: rem(49),
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.blue[9],
                      borderRadius: theme.radius.xs,
                      background: theme.colors.lemon[5],
                    },
                    label: {
                      fontWeight: theme.other.fontWeight.semibold,
                    },
                  };
                },

                large(theme, params, context) {
                  return {
                    root: {
                      height: rem(49),
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.blue[9],
                      borderRadius: theme.radius.xs,
                      background: theme.colors.lemon[5],
                    },
                    label: {
                      fontWeight: theme.other.fontWeight.semibold,
                    },
                  };
                },
                outline(theme, params, context) {
                  return {
                    root: {
                      height: rem(49),
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.blue[9],
                      borderRadius: theme.radius.xs,
                      border: `${rem(1)} solid ${theme.colors.blue[9]}`,
                      backgroundColor: "transparent",
                    },

                    label: {
                      fontWeight: theme.other.fontWeight.semibold,
                    },
                  };
                },
              },
            },

            TextInput: {
              styles(theme, params, context) {
                return {
                  root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing.sm,
                  },
                };
              },
              variants: {
                search(theme, params, context) {
                  return {
                    icon: {
                      color:
                        theme.colorScheme === "light"
                          ? theme.colors.blue[5]
                          : "white",
                      width: "fit-content",
                      paddingLeft: "16px",
                    },
                    input: {
                      height: "fit-content",
                      lineHeight: "normal",
                      border:
                        theme.colorScheme === "light"
                          ? `${rem(1)} solid ${theme.colors.brand[0]}`
                          : "none",
                      background:
                        theme.colorScheme === "light"
                          ? theme.colors.white[0]
                          : theme.colors.violet[5],
                      paddingRight: theme.spacing.md,
                      paddingBlock: theme.spacing.sm,
                      borderRadius: theme.radius.xs,
                      color:
                        theme.colorScheme === "light"
                          ? theme.colors.blue[9]
                          : "white",
                      fontWeight: theme.other.fontWeight.semibold,
                      "&::placeholder": {
                        color:
                          theme.colorScheme === "light"
                            ? theme.colors.blue[5]
                            : "white",
                        fontSize: theme.fontSizes.sm,
                        fontWeight: theme.other.fontWeight.normal,
                      },
                      "&[data-with-icon]": {
                        paddingLeft: "calc(16px + 20px + 8px)",
                      },
                      "&:focus-within": {
                        border: `${rem(1)} solid ${theme.colors.lemon[5]}`,
                      },
                      "&:focus-visible": {
                        border: `${rem(1)} solid ${theme.colors.lemon[5]}`,
                        outline: "none",
                      },
                    },
                  };
                },
                default(theme, params, context) {
                  return {
                    label: {
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : theme.colors.blue[9],
                      fontWeight: theme.other.fontWeight.normal,
                      lineHeight: "normal",
                    },
                    input: {
                      height: "fit-content",
                      lineHeight: "normal",
                      border:
                        theme.colorScheme === "light"
                          ? `${rem(1)} solid ${theme.colors.brand[1]}`
                          : "none",
                      background:
                        theme.colorScheme === "light"
                          ? theme.colors.white[0]
                          : theme.colors.violet[5],
                      padding: theme.spacing.md,
                      borderRadius: theme.radius.xs,
                      color:
                        theme.colorScheme === "dark"
                          ? "white"
                          : theme.colors.blue[9],
                      fontWeight: theme.other.fontWeight.semibold,
                      "&::placeholder": {
                        color:
                          theme.colorScheme === "dark"
                            ? "white"
                            : theme.colors.blue[5],
                        fontSize: theme.fontSizes.sm,
                        fontWeight: theme.other.fontWeight.normal,
                      },
                    },
                  };
                },
              },
            },
            Select: {
              styles(theme, params, context) {
                return {
                  root: {
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing.sm,
                  },
                  rightSection: {
                    pointerEvents: "none",
                    color:
                      theme.colorScheme === "light"
                        ? theme.colors.blue[5]
                        : "white",
                  },
                  input: {
                    height: "fit-content",
                    lineHeight: "normal",
                    border:
                      theme.colorScheme === "light"
                        ? `${rem(1)} solid ${theme.colors.brand[1]}`
                        : "none",
                    background:
                      theme.colorScheme === "light"
                        ? theme.colors.white[0]
                        : theme.colors.violet[5],
                    padding: theme.spacing.md,
                    borderRadius: theme.radius.xs,
                    color: theme.colors.blue[9],
                    fontWeight: theme.other.fontWeight.semibold,
                    "&::placeholder": {
                      color:
                        theme.colorScheme === "light"
                          ? theme.colors.blue[5]
                          : "white",
                      fontSize: theme.fontSizes.sm,
                      fontWeight: theme.other.fontWeight.normal,
                    },
                  },
                };
              },
            },

            Text: {
              variants: {
                xs(theme, param, context) {
                  return {
                    root: {
                      fontSize: theme.fontSizes.xs,
                    },
                  };
                },

                xs_semibold(theme, param, context) {
                  return {
                    root: {
                      fontSize: theme.fontSizes.xs,
                      fontWeight: theme.other.fontWeight.semibold,
                    },
                  };
                },

                xs_normal(theme, param, context) {
                  return {
                    root: {
                      fontSize: theme.fontSizes.xs,
                      fontWeight: theme.other.fontWeight.normal,
                    },
                  };
                },

                sm_normal(theme, param, context) {
                  return {
                    root: {
                      fontSize: theme.fontSizes.sm,
                      fontWeight: theme.other.fontWeight.normal,
                    },
                  };
                },
              },
            },
          },
          fontSizes: {
            xs: rem(12),
            sm: rem(14),
            md: rem(16),
            lg: rem(18),
            xl: rem(24),
          },
          shadows: {
            xs: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
          },
          spacing: {
            xs: rem(4),
            xsm: rem(6),
            sm: rem(8),
            sms: rem(10),
            smd: rem(12),
            md: rem(16),
            lg: rem(20),
            xl: rem(24),
            "2xl": rem(32),
            "3xl": rem(40),
          },

          radius: {
            xxs: rem(5),
            xs: rem(8),
            sm: rem(12),
            md: rem(16),
            lg: rem(100),
          },

          headings: {
            fontFamily: "Kumbh Sans, sans-serif",

            sizes: {
              h1: {
                fontSize: rem(24),
                fontWeight: 700,
                lineHeight: "normal",
              },
              h2: {
                fontSize: rem(18),
                fontWeight: 700,
                lineHeight: "normal",
              },
              h4: {
                fontSize: rem(16),
                fontWeight: 600,
                lineHeight: "",
              },

              h5: {
                fontSize: rem(14),
                fontWeight: 600,
              },
              h6: {
                fontSize: rem(12),
                fontWeight: 600,
              },
            },
          },
          other: {
            fontWeight: {
              normal: 400,
              medium: 500,
              semibold: 600,
              bold: 700,
              extrabold: 800,
              black: 900,
            },
          },
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Provider;
