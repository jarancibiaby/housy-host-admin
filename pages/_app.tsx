/* eslint-disable react/jsx-key */
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import LateralMenu from "../components/Menu/LateralMenu";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <>
      <LateralMenu />
      <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}

export default MyApp;
