import React, { useState, useEffect } from "react";

import DesktopHeader from "../DesktopHeader/DesktopHeader";
import NavLinks from "../NavLinks/NavLinks";
import MobileHeader from "../MobileHeader/MobileHeader";

const Layout = ({ children }) => {
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
    if (windowWidth > 1024) {
      return (
        <React.Fragment>
          <DesktopHeader />
          <div className="pageContainer">{children}</div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MobileHeader />
          <div className="pageContainer">{children}</div>
          <NavLinks isMobile={true} />
        </React.Fragment>
      );
    }
  };

  return <div>{renderPageWithLayout()}</div>;
};

export default Layout;
