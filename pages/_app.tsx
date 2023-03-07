/* eslint-disable react/jsx-key */
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import LateralMenu from "../components/Menu/LateralMenu";
import LoginButton from "../components/LoginButton/LoginButton";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const loggedContent = (
    <>
      <LateralMenu />
      <Component {...pageProps} />
    </>
  );

  const notLoggedContent = (
    <>
      <LoginButton />
    </>
  )

  return (
    <SessionProvider session={session}>
      <>
        {loggedContent}
      </>
    </SessionProvider>
  );
}

export default MyApp;
