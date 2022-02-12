import { useRouter } from "next/router";
import { useEffect } from "react";

const isAuthorized = true;

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (!isAuthorized && pathname !== "/account/[authType]") {
      router.push("/account/login");
    }
  }, [router, pathname]);

  if (!isAuthorized) {
    return pathname === "/account/[authType]" && children;
  } else {
    return children;
  }
};

export default RouteGuard;
