import { FaLock, FaRegUser } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";

type Inputs = {
    id: string;
    password: string;
    remember: boolean;
}

function HomePage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = useCallback(data => {
        console.log(data);
    }, [])

    return <div className="w-full h-full flex justify-center items-center bg-[url('assets/images/background2.png')] bg-no-repeat bg-cover">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[350px] border border-white border-opacity-30 backdrop-blur-md rounded-lg overflow-hidden flex-1 py-[10px]">
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
                            {...register("id", { required: true })} />
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
                            {...register("password", { required: true })} />
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
                <div className="text-red-400 flex justify-center w-full py-[10px]">
                    사용자가 존재하지 않습니다
                </div>
            </div>
        </form>
    </div>
}

export default HomePage;