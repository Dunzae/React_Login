import { useContext, useCallback, useMemo, useState, useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import LoginComponent from "@components/Login";
import axiosInstance from "@apis/index";
import ServerError from "@constants/ServerError";
import TokenContext from "@constants/TokenContext";

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

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, password }) => {
        setErrorMessage("");

        const result = await axiosInstance.postApi("/auth/signIn", { id, password })
        if (result.error !== undefined) {
            alert("로그인에 실패하였습니다.")
            setErrorMessage(ServerError[result.error]);
        } else {
            token.setAccessToken(result.data?.accessToken);
            token.setRefreshToken(result.data?.refreshToken);
            localStorage.setItem("accessToken", result.data?.accessToken);
            localStorage.setItem("refreshToken", result.data?.refreshToken);
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