import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppLaylout } from "../components/layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLaylout>
      <Component {...pageProps} />
    </AppLaylout>
  );
}

export default MyApp;
