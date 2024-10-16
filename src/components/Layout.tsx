import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";
import MenubarComponent from "@components/Menubar";
import PostPreviewComponent from "@components/PostPreview";

interface ILayoutComponent {
    children: React.ReactNode
}

function LayoutComponent({
    children
}: ILayoutComponent) {
    return (
        <div className="h-auto lg:flex lg:flex-row">
            <div className="h-[100px] fixed bg-white lg:min-w-[320px] lg:w-[24%] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.jpg')] lg:bg:transparent lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
                <div className="h-auto">
                    <div className="h-full flex flex-col">
                        <div className="text-black flex justify-center bg-white lg:bg-transparent lg:w-full lg:text-white lg:flex lg:justify-center lg:mb-2">
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
            {/* 제목과 프로필란의 공간 차지를 위한 div */}
            <div className="h-[100px] lg:min-w-[320px] lg:w-[24%] lg:h-full flex-shrink-0" />
            {/* 사이드 메뉴바 */}
            <div className="lg:w-[100px] lg:flex-shrink-0 lg:static  lg:h-full">
                <div className="fixed bottom-0 w-full lg:top-0 lg:flex lg:items-center lg:w-[100px]">
                    <MenubarComponent currentPath="/" />
                </div>
                {/* <NavigationMenu /> */}
            </div>
            <div className="min-h-full bg-[#f2f2f2]">
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent;