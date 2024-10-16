import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";
import MenubarComponent from "@components/Menubar";


function HomePage() {
    const currentPath: string = "/";

    return (
        <div className="h-full lg:flex lg:flex-row">
            <div className="h-[100px] fixed lg:w-[400px] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.jpg')] lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
                <div className="h-auto">
                    <div className="h-full flex flex-col">
                        <div className="text-black flex justify-center lg:w-full lg:text-white lg:flex lg:justify-center lg:mb-2">
                            <TitleComponent />
                        </div>
                        <div className="hidden lg:flex">
                            <ProfileComponent
                                nameColor="white"
                                tagColor="gray"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] lg:w-[400px] lg:h-full flex-shrink-0" />
            {/* 사이드 메뉴바 */}
            <div className="fixed bottom-0 w-full lg:static lg:w-[100px] lg:h-full lg:flex lg:items-center border border-[#E6E6E6] ">
                <MenubarComponent currentPath="/" />
                {/* <NavigationMenu /> */}
            </div>
            <div className="">

                Body
                {/* <PostList>
                    <Post/>
                    <Post />
                    <Post />
                </PostList> */}
            </div>
        </div>
    )
}

export default HomePage;