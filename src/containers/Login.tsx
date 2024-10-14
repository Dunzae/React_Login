import { useCallback, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import LoginComponent from "@components/Login";
import axiosInstance from "@apis/index";
import ServerError from "@constants/ServerError";

export type InputsType = {
    id: string;
    password: string;
    remember: boolean;
}

const idPattern = /\w{6}.+/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm

function LoginContainer() {
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, password }) => {
        setErrorMessage("");

        const result = await axiosInstance.postApi("/auth/signIn", { id, password })
        if (result.error !== undefined) {
            alert("로그인에 실패하였습니다.")
            setErrorMessage(ServerError[result.error]);
        } else {
            alert("로그인에 성공하셨습니다.");
        }

    }, [])

    const onSubmitError: SubmitErrorHandler<InputsType> = useCallback((errors, e) => {
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