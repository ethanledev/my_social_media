import React, { useState, useEffect } from "react";

import DesktopHeader from "../DesktopHeader/DesktopHeader";
import NavLinks from "../NavLinks/NavLinks";
import MobileHeader from "../MobileHeader/MobileHeader";
import Overlay from "../Overlay/Overlay";
import { useSelector } from "react-redux";
import { selectOverlayType } from "../../../redux/overlay/overlay.selectors";
import { selectWindowWidth } from "../../../redux/app/app.selectors";
import { useDispatch } from "react-redux";
import { changeWindowWidth } from "../../../redux/app/app.actions";

const Layout = ({ Component, pageProps, pathname }) => {
  const overlayType = useSelector(selectOverlayType);
  const windowWidth = useSelector(selectWindowWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(changeWindowWidth(window.innerWidth));
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [dispatch]);

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
