import { useEffect, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "normalize.css"
import "./global.css";
import TokenContext from "@constants/TokenContext";
import router from "./routes"

const App = () => {
  const [accessToken, setAccessToken] = useState<undefined | string>(undefined);
  const [refreshToken, setRefreshToken] = useState<undefined | string>(undefined);
  const tokenContextValue = useMemo(() => ({
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken
  }), [accessToken, refreshToken]);

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken") || undefined);
    setRefreshToken(localStorage.getItem("refreshToken") || undefined);
  });

  return (
    <TokenContext.Provider value={tokenContextValue}>
      <RouterProvider router={router} />;
    </TokenContext.Provider>
  )
};
export default App;