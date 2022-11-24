import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Youtube clone</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=devidce-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <NotificationsProvider>
          <QueryClientProvider client={queryClient}>
            {getLayout(
              <main>
                <Component {...pageProps} />
              </main>
            )}
          </QueryClientProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
