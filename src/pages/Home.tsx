import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";
import MenubarComponent from "@components/Menubar";
import PostPreviewComponent from "@components/PostPreview";


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
            <div className="fixed bottom-0 w-full lg:static lg:w-[100px] lg:h-full lg:flex lg:items-center">
                <MenubarComponent currentPath="/" />
                {/* <NavigationMenu /> */}
            </div>
            <div className="px-[10px] py-[10px] lg:px-[40px] lg:py-[40px]">
                {/* 최신 순, 추천 순 OrderComponent */}
                <div className="mb-[10px] lg:mb-[20px]">
                    <div className="w-full border-b-2 border-gray flex justify-center lg:block">
                        <span className="p-4 inline-block">Following</span>
                        <span className="p-4 inline-block box-border text-gray opacity-40">Recommended</span>
                    </div>
                </div>
                <div>
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                </div>
            </div>
            {/* <PostList>
                    <Post/>
                    <Post />
                    <Post />
                </PostList> */}
        </div>

    )
}

export default HomePage;