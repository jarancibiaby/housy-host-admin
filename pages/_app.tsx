/* eslint-disable react/jsx-key */
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react"
import "../styles/globals.css";
import LateralMenu from "../components/Menu/LateralMenu";
import Login from "../components/Login/Login";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const loggedContent = (
    <>
      <LateralMenu />
      <Component {...pageProps} />
    </>
  );

  const notLoggedContent = (
    <>
      <Login />
    </>
  )

  return (
    <SessionProvider session={session}>
      <>
        {session ? loggedContent : notLoggedContent}
      </>
    </SessionProvider>
  );
}

export default MyApp;
