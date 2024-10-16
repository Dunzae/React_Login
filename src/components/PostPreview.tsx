import ProfileImage from "@assets/images/profile.jpg"
import BackgroundImage from "@assets/images/background.png";
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";


interface IPostPreviewComponent {
    reverse? : boolean
}
function PostPreviewComponent({
    reverse,
} : IPostPreviewComponent) {
    return <div className="border-b-2 mb-4 border-[#E6E6E6]">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:max-h-[250px] overflow-y-hidden gap-4 mb-4`}>
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-2 lg:mb-4">
                    <span>
                        <img src={ProfileImage} width={30} height={30} className="rounded-[50%] mr-2" />
                    </span>
                    <span className="text-[14px] text-[#292929]">프로필 이름</span>
                    <span className="mx-2">·</span>
                    <span className="text-[14px] text-[#757575]">작성 날짜</span>
                </div>
                <div className="lg:flex lg:flex-col lg:w-full">
                    <p className="text-[#191919] mb-2 font-[Roboto] font-bold text-[22px] ">Your portfolio is stopping you from geting that job</p>
                    <p className="text-[#292929]">
                        An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...
                    </p>
                </div>
            </div>
            <div className="w-full h-auto lg:basis-[250px] lg:h-[250px] lg:flex-shrink-0 lg:flex-grow-0">
                <img className="w-full h-full object-cover" src={BackgroundImage} />
            </div>
        </div>
        <div className="flex justify-between mb-4">
            <div className="flex items-center">
                <span className="p-2 mr-2 rounded-[20%] color-[#292929] font-light font-[Roboto] bg-[#f2f2f2]">Category</span>
                <span className="p-2 color-[#757575] font-light font-[Roboto]">3 min read</span>
            </div>
            <div className="flex items-center basis-0">
                <div className="mr-4">
                    <BsBookmarkPlus size={25} />
                    {/* <BsBookmarkPlusFill size={25}/> */}
                </div>
                <div className="inline-block">
                    <IoIosMore size={25} />
                </div>
            </div>
        </div>
    </div>
}

export default PostPreviewComponent;