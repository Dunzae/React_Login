import { useCallback, useContext, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import RegisterComponent from "@components/Register";
import axiosInstance from "@apis/index";
import ServerError from "@constants/ServerError";
import TokenContext from "@constants/TokenContext";

export type InputsType = {
    id: string;
    email: string;
    password: string;
    remember: boolean;
}

const idPattern = /\w{6}.+/
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm

function RegisterContainer() {
    const token = useContext(TokenContext);
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, email, password }) => {
        setErrorMessage("");

        const result = await axiosInstance.postApi("/auth/signUp", { id, email, password })
        if (result.error !== undefined) {
            alert("회원가입에 실패하였습니다.")
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

        if (errors.email && errors.email.message) {
            setErrorMessage(errors.email.message);
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
        <RegisterComponent
            onSubmit={memorizedHandleSubmit}
            errorMessage={errorMessage}
            register={register}
            idPattern={idPattern}
            emailPattern={emailPattern}
            passwordPattern={passwordPattern}
        />

    )
}

export default RegisterContainer;