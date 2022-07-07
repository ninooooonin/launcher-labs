import React, { Fragment } from "react";
import type { AppProps } from "next/app";

import AppHeader from "../templates/header";
import AppFooter from "../templates/footer";

import "../scss/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </Fragment>
  );
};

export default App;
