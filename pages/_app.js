import React, { useEffect, useState } from "react";

import DesktopHeader from "../components/desktop-header";
import NavLinks from "../components/nav-links";
import MobileHeader from "../components/mobile-header";
import DesktopHeaderProvider from "../contexts/desktop-header-context";

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
          <DesktopHeaderProvider>
            <DesktopHeader />
          </DesktopHeaderProvider>
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

  return renderApp();
};

export default MyApp;
