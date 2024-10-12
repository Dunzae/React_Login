import { FaLock, FaRegUser } from "react-icons/fa6";

function HomePage() {
    return <div className="w-full h-full flex justify-center items-center bg-[url('assets/images/background2.png')] bg-no-repeat bg-cover">

        <form className="max-w-[350px] border border-white border-opacity-30 backdrop-blur-md rounded-lg overflow-hidden flex-1 py-[10px]">
            <div className="flex w-full pb-[10px] my-[10px] ">
                <div className="w-full flex justify-center py-[10px]">
                    <span className="text-[30px] text-white font-bold">Login</span>
                </div>
            </div>
            <div className="flex w-full px-[20px] py-[10px] overflow-hidden">
                <div className="flex px-[10px] py-[5px] justify-between items-center border-2 border-white border-opacity-50 rounded-2xl w-full h-full">
                    <div className="flex w-full h-full mr-2">
                        <input className="w-full h-full bg-transparent text-white placeholder:text-white outline-none border-none" placeholder="Username" />
                    </div>
                    <div className="flex h-full text-white">
                        <FaRegUser />
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[20px] py-[10px] overflow-hidden">
                <div className="flex px-[10px] py-[5px] justify-between items-center border-2 border-white border-opacity-50 rounded-2xl w-full h-full">
                    <div className="flex w-full h-full mr-2 ">
                        <input type="password" className="w-full h-full bg-transparent text-white placeholder:text-white outline-none border-none" placeholder="Password" />
                    </div>
                    <div className="flex h-full text-white">
                        <FaLock />
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full px-[20px] py-[10px] mb-[10px] ">
                <div className="flex justify-between items-center w-full">
                    <div className="flex ">
                        <div className="mr-1">
                            <input type="checkbox" id="remember" className="cursor-pointer" />
                        </div>
                        <span className="text-white">
                            <label htmlFor="remember" className="cursor-pointer">Remember Me</label>
                        </span>
                    </div>
                    <div >
                        <button className="text-white">Forgot password</button>
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[20px] mb-[20px]">
                <div className="flex py-2 justify-center w-full rounded-3xl bg-white ">
                    <button className="w-full h-full">Login</button>
                </div>
            </div>
            <div className="flex w-full px-[20px] pb-[10px] text-white justify-center">
                <div>
                    <span className="mr-2">Don't have account?</span>
                    <button className="border-b-2 border-transparent hover:border-white">Register</button>
                </div>
            </div>
        </form>

    </div>
}

export default HomePage;