import React, { useState, useEffect } from "react";

import DesktopHeader from "../../Commons/DesktopHeader/DesktopHeader";
import NavLinks from "../../Commons/NavLinks/NavLinks";
import MobileHeader from "../../Commons/MobileHeader/MobileHeader";
import { useRouter } from "next/router";
import { mobileOnlyPaths } from "../../../utils";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const renderPageWithLayout = () => {
    if (windowWidth > 900) {
      // check if current path is a mobile only path, if true, redirect to "/"
      if (mobileOnlyPaths.indexOf(pathname) !== -1) {
        router.push("/");
      }

      return (
        <React.Fragment>
          <DesktopHeader />
          <div className="pageContainer">
            <div>{windowWidth} px</div>
            {children}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <MobileHeader />
          <div className="pageContainer">
            <div>{windowWidth} px</div>
            {children}
          </div>
          <NavLinks isMobile={true} />
        </React.Fragment>
      );
    }
  };

  return <div>{renderPageWithLayout()}</div>;
};

export default Layout;
