import React, { useState, useEffect } from "react";

import DesktopHeader from "../DesktopHeader/DesktopHeader";
import NavLinks from "../NavLinks/NavLinks";
import MobileHeader from "../MobileHeader/MobileHeader";

const Layout = ({ Component, pageProps, pathname }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const renderPageWithLayout = () => {
    if (pathname === "/account/messenger" && windowWidth <= 750) {
      return <Component {...pageProps} windowWidth={windowWidth} />;
    } else if (windowWidth > 1024) {
      return (
        <React.Fragment>
          <DesktopHeader />
          <Component {...pageProps} windowWidth={windowWidth} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MobileHeader />
          <Component {...pageProps} windowWidth={windowWidth} />
          <NavLinks isMobile={true} />
        </React.Fragment>
      );
    }
  };

  return <div>{renderPageWithLayout()}</div>;
};

export default Layout;
