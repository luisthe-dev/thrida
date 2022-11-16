import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const myLocation = useLocation();

  useEffect(() => window.scrollTo(0, 0), [myLocation]);
  return <>{children}</>;
};

export default ScrollToTop;
