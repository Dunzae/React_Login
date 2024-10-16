import { useContext, useCallback, useMemo, useState, useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import LoginComponent from "@components/Login";
import axiosInstance from "@apis/index";
import ServerError from "@constants/ServerError";
import TokenContext from "@constants/TokenContext";
import { setLocalStorageItem } from "../utils/storage";

export type InputsType = {
    id: string;
    password: string;
    remember: boolean;
}

const idPattern = /\w{6}.+/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm

function LoginContainer() {
    const token = useContext(TokenContext);
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, password, remember }) => {
        setErrorMessage("");

        const result = await axiosInstance.postApi("/auth/signIn", { id, password })
        if (result.error !== undefined) {
            alert("로그인에 실패하였습니다.")
            setErrorMessage(ServerError[result.error]);
        } else {
            token.setAccessToken(result.data?.accessToken);
            token.setRefreshToken(result.data?.refreshToken);

            if(remember) {
                // remeemberme를 눌렀을 경우 유효기간을 설정하지 않는다.
                setLocalStorageItem("token", {
                    accessToken: result.data?.accessToken,
                    refreshToken: result.data?.refreshToken,
                })
            } else {
                // rememberme를 누르지 않았을 경우 최대 로그인 시간을 1시간으로 설정한다.
                setLocalStorageItem("token", {
                    accessToken: result.data?.accessToken,
                    refreshToken: result.data?.refreshToken,
                }, {
                    exp : "1h"
                })
            }
        }
    }, [token])

    const onSubmitError: SubmitErrorHandler<InputsType> = useCallback((errors) => {
        if (errors.id && errors.id.message) {
            setErrorMessage(errors.id.message);
            return;
        }

        if (errors.password && errors.password.message) {
            setErrorMessage(errors.password.message);
            return;
        }
    }, []);

    const memorizedHandleSubmit = useMemo(() => handleSubmit(onSubmit, onSubmitError), []);

    if (token.accessToken && token.refreshToken)
        return <Navigate to="/" />;

    return (
        <LoginComponent
            onSubmit={memorizedHandleSubmit}
            errorMessage={errorMessage}
            register={register}
            idPattern={idPattern}
            passwordPattern={passwordPattern}
        />
    )

}

export default LoginContainer;