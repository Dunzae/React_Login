import { useCallback, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaRegUser } from "react-icons/fa6";
import axiosInstance from "../api/index";
import ServerError from "../constant/ServerError"

type Inputs = {
    id: string;
    password: string;
    remember: boolean;
}

function HomePage() {
    const idPattern = /\w{6}.+/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[^  |\n]+$/gm
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = useCallback(async ({id, password}) => {
        setErrorMessage("");
        
        const result = await axiosInstance.postApi("/auth/signIn", {id, password})
        if(result.error !== undefined) {
            alert("로그인에 실패하였습니다.")
            setErrorMessage(ServerError[result.error]);
        } else {
            alert("로그인에 성공하셨습니다.");
        }
    
    }, [])
    const onSubmitError: SubmitErrorHandler<Inputs> = useCallback((errors, e) => {
        if (errors.id && errors.id.message) {
            setErrorMessage(errors.id.message);
            return;
        }

        if (errors.password && errors.password.message) {
            setErrorMessage(errors.password.message);
            return;
        }
    }, []);

    return <div className="w-full h-full flex justify-center items-center bg-[url('assets/images/background2.png')] bg-no-repeat bg-cover">
        <form onSubmit={handleSubmit(onSubmit, onSubmitError)} className="max-w-[350px] border border-white border-opacity-30 backdrop-blur-md rounded-lg overflow-hidden flex-1 py-[10px]">
            <div className="flex w-full pb-[10px] my-[10px] ">
                <div className="w-full flex justify-center py-[10px]">
                    <span className="text-[30px] text-white font-bold">Login</span>
                </div>
            </div>
            <div className="flex w-full px-[20px] py-[10px] overflow-hidden">
                <div className="flex px-[10px] py-[5px] justify-between items-center border-2 border-white border-opacity-50 rounded-2xl w-full h-full">
                    <div className="flex w-full h-full mr-2">
                        <input className="w-full h-full bg-transparent text-white placeholder:text-white outline-none border-none"
                            placeholder="Username"

                            {...register("id", {
                                required : {
                                    value : true,
                                    message : "아이디를 입력해주세요."
                                },
                                pattern: {
                                    value: idPattern,
                                    message: "아이디는 6글자 이상이여야 합니다."
                                }
                            })} />
                    </div>
                    <div className="flex h-full text-white">
                        <FaRegUser />
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[20px] py-[10px] overflow-hidden">
                <div className="flex px-[10px] py-[5px] justify-between items-center border-2 border-white border-opacity-50 rounded-2xl w-full h-full">
                    <div className="flex w-full h-full mr-2 ">
                        <input type="password" className="w-full h-full bg-transparent text-white placeholder:text-white outline-none border-none"
                            placeholder="Password"

                            {...register("password", {
                                required : {
                                    value : true,
                                    message : "비밀번호를 입력해주세요."
                                },
                                pattern: {
                                    value: passwordPattern,
                                    message: "비밀번호는 6글자 이상, 영소문자, 영대문자, 특수문자(~!@#$%^&*)가 포함되어야 합니다."
                                }
                            })} />
                    </div>
                    <div className="flex h-full text-white">
                        <FaLock />
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full px-[20px] py-[10px]">
                <div className="flex justify-between items-center w-full">
                    <div className="flex ">
                        <div className="mr-1">
                            <input id="remember"
                                type="checkbox"
                                className="cursor-pointer"
                                {...register("remember")} />
                        </div>
                        <span className="text-white">
                            <label htmlFor="remember" className="cursor-pointer">Remember Me</label>
                        </span>
                    </div>
                    <div >
                        <button type="button" className="text-white">Forgot password</button>
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[20px] mb-[10px]">
                <div className="flex py-2 justify-center w-full rounded-3xl bg-white ">
                    <button type="submit" className="w-full h-full">Login</button>
                </div>
            </div>
            <div className="flex w-full">
                <div className='flex w-full px-[20px] pb-[10px] text-white justify-center'>
                    <span className="mr-2">Don't have account?</span>
                    <button type="button" className="border-b-2 border-transparent hover:border-white">Register</button>
                </div>
            </div>
            <div className="w-full mb-[10px]">
                <div className="text-red-400 w-full flex justify-center text-center px-[20px] py-[10px]">
                    {errorMessage !== "" && errorMessage}
                </div>
            </div>
        </form>
    </div>
}

export default HomePage;