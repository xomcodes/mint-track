import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextApp, { AppContext, AppProps } from "next/app";
import Provider from "../providers";
import { useState } from "react";
import { ColorScheme } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Provider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
  };
};
