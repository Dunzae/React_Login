import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";

function NotificationPage() {
    return (
        <div className="h-full lg:flex lg:flex-row">
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
            <div className="h-[100px] lg:min-w-[320px] lg:w-[24%] lg:h-full flex-shrink-0" />
        </div>
    )
}

export default NotificationPage;