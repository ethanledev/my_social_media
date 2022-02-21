import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Layout from "../components/elements/Layout/Layout";
import RouteGuard from "../components/elements/RouteGuard/RouteGuard";

import { store } from "../redux/store";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  const renderApp = () => {
    if (pathname === "/account/[authType]") {
      return <Component {...pageProps} />;
    } else {
      return (
        <Layout
          Component={Component}
          pageProps={pageProps}
          pathname={pathname}
        />
      );
    }
  };

  return (
    <Provider store={store}>
      <RouteGuard>{renderApp()}</RouteGuard>
    </Provider>
  );
};

export default MyApp;
