import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppLaylout } from "../components/layout/AppLayout";
import { Provider } from "react-redux";
import { store } from "../Toolkit/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLaylout>
        <Component {...pageProps} />
      </AppLaylout>
    </Provider>
  );
}

export default MyApp;
