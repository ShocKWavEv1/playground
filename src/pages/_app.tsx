import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import LoadingBar from "react-top-loading-bar";
import Fonts from "@/theme/fonts/fonts";
import theme from "@/theme/theme";
import dynamic from "next/dynamic";

const Cursor = dynamic(
  () => import("./components/cursor/cursor").then((mod) => mod.Cursor),
  { ssr: false }
);

export default function App({ Component, pageProps, router }: AppProps) {
  const LoadingBarRef: any = useRef(null);

  useEffect(() => {
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  const handleRouteComplete = () => {
    if (LoadingBar !== null) {
      setTimeout(function () {
        LoadingBarRef.current.complete();
      }, 300);
    }
  };

  const handleRouteStart = () => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err: any) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Cursor />
      <LoadingBar ref={LoadingBarRef} height={8} color="#ff98a1" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
