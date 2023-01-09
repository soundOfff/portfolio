import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React from "react";
import LoadingScreen from "../sections/LoadingScreen";
import { Transition } from "@headlessui/react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Transition
        show={!loading}
        enter="transition ease duration-700 transform"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-1000 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        {!loading ? (
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        ) : (
          <LoadingScreen />
        )}
      </Transition>
    </>
  );
}

export default MyApp;
