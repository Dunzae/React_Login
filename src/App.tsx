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
    const storageToken = JSON.parse(localStorage.getItem("token") || "{}")

    if (Object.keys(storageToken).length !== 0) {
      if (storageToken.value.accessToken && storageToken.value.refreshToken) {
        if (storageToken.opt) {
          if (storageToken.opt.exp > Date.now()) {
            setAccessToken(storageToken.value.accessToken);
            setRefreshToken(storageToken.value.refreshToken)
          }
        } else {
          setAccessToken(storageToken.value.accessToken);
          setRefreshToken(storageToken.value.refreshToken)
        }
      }
    }
  })

  return (
    <TokenContext.Provider value={tokenContextValue}>
      <RouterProvider router={router} />;
    </TokenContext.Provider>
  )
};
export default App;