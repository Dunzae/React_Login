import { createContext } from "react";

interface ITokenContext {
    accessToken: undefined | string;
    refreshToken: undefined | string;
    setAccessToken: (_setAccessToken: undefined | string) => void;
    setRefreshToken: (_setAccessToken: undefined | string) => void
}

const TokenContext = createContext<ITokenContext>({
    accessToken: undefined,
    refreshToken: undefined,
    setAccessToken: () => { },
    setRefreshToken: () => { }
})

export default TokenContext;