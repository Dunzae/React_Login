import { useCallback, useMemo, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import RegisterComponent from "@components/Register";
import axiosInstance from "@apis/index";
import ServerError from "@constants/ServerError";

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
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<InputsType>();

    const onSubmit: SubmitHandler<InputsType> = useCallback(async ({ id, email, password }) => {
        setErrorMessage("");

        const result = await axiosInstance.postApi("/auth/signUp", { id, email, password })
        if (result.error !== undefined) {
            alert("회원가입에 실패하였습니다.")
            setErrorMessage(ServerError[result.error]);
        } else {
            alert("회원가입에 성공하셨습니다.");
        }

    }, [])

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