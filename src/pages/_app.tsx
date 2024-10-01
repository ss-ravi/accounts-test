import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session} basePath={`${process.env.NEXT_PUBLIC_BASE_PATH}/api/auth`}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
