import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppLaylout } from "../components/layout/AppLayout";
import Navigation from "../components/ui/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLaylout>
      <Navigation />
      <Component {...pageProps} />
    </AppLaylout>
  );
}

export default MyApp;
