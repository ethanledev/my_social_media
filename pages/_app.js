import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import DesktopHeader from "../components/_app/desktop-header/desktop-header";
import NavLinks from "../components/_app/nav-links/nav-links";
import MobileHeader from "../components/_app/mobile-header/mobile-header";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const renderApp = () => {
    if (windowWidth > 900) {
      return (
        <React.Fragment>
          <DesktopHeader />
          <div className="pageContainer">
            <div>{windowWidth} px</div>
            <Component {...pageProps} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MobileHeader />
          <div className="pageContainer">
            <div>{windowWidth} px</div>
            <Component {...pageProps} />
          </div>
          <NavLinks isMobile={true} />
        </React.Fragment>
      );
    }
  };

  return <Provider store={store}>{renderApp()}</Provider>;
};

export default MyApp;
