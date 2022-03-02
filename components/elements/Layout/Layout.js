import React, { useState, useEffect } from "react";

import DesktopHeader from "../DesktopHeader/DesktopHeader";
import NavLinks from "../NavLinks/NavLinks";
import MobileHeader from "../MobileHeader/MobileHeader";
import Overlay from "../Overlay/Overlay";
import { useSelector } from "react-redux";
import { selectOverlayType } from "../../../redux/overlay/overlay.selectors";

const Layout = ({ Component, pageProps, pathname }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const overlayType = useSelector(selectOverlayType);

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
    } else {
      return (
        <React.Fragment>
          {windowWidth > 750 && overlayType !== null && <Overlay />}
          {windowWidth > 1024 ? <DesktopHeader /> : <MobileHeader />}
          <Component {...pageProps} windowWidth={windowWidth} />
          {windowWidth <= 1024 && <NavLinks isMobile={true} />}
        </React.Fragment>
      );
    }
  };

  return <div>{renderPageWithLayout()}</div>;
};

export default Layout;
