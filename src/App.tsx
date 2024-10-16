import { useEffect, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "normalize.css"
import "./global.css";
import TokenContext from "@constants/TokenContext";
import router from "./routes"
import { getLocalStorageItem } from "@utils/storage";

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
    const storageToken = getLocalStorageItem("token");

    if (storageToken !== undefined) {
      setAccessToken(storageToken.value.accessToken);
      setRefreshToken(storageToken.value.refreshToken)
    }
  })

  return (
    <TokenContext.Provider value={tokenContextValue}>
      <RouterProvider router={router} />;
    </TokenContext.Provider>
  )
};
export default App;