import * as React from "react";
import { useLocation } from "react-router-dom";

export default function useCorp() {
  const location = useLocation();
  const [isCorp, setIsCorp] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsCorp(window.location.hostname.startsWith("corp") || window.location.hostname.startsWith("localhost"));
  }, [location]);

  return isCorp;
}
