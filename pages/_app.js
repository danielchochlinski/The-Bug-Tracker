import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import { Provider } from "next-auth/client";
import "../styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showHeader = router.pathname === "/auth" ? false : true;
  return (
    <NotificationContextProvider>
      <Provider session={pageProps.session}>
        {showHeader && <Layout />}
        <Component {...pageProps} />
      </Provider>
    </NotificationContextProvider>
  );
}

export default MyApp;
