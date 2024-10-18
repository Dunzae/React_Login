import {
    IoHome, IoHomeOutline, IoBookmark, IoBookmarkOutline, IoDocumentTextOutline, IoDocumentTextSharp,
    IoPerson, IoPersonOutline
} from "react-icons/io5";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface IMenubarComponent {
    currentPath: string
}

function MenubarComponent({
    currentPath
}: IMenubarComponent) {
    const navigate = useNavigate();

    return (
        <ul className="w-full flex flex-row flex-grow-0 bg-white lg:flex lg:flex-col lg:items-center lg:py-5 lg:border-r lg:border-r-[#E6E6E6]">
            <li onClick={() => navigate("/")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                {currentPath === "/" ? <IoHome size={30} /> : <IoHomeOutline size={30} />}
            </li>
            <li className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                {currentPath === "/notification" ? <IoMdNotifications size={30} /> : <IoMdNotificationsOutline size={30} />}
            </li>
            <li onClick={() => navigate("/bookmark")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                {currentPath === "/bookmark" ? <IoBookmark size={30} /> : <IoBookmarkOutline size={30} />}
            </li>
            <li onClick={() => navigate("/post")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                {currentPath === "/post" ? <IoDocumentTextSharp size={30} /> : <IoDocumentTextOutline size={30} />}
            </li>
            <li onClick={() => navigate("/profile")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                {currentPath === "/profile" ? <IoPerson size={30} /> : <IoPersonOutline size={30} />}
            </li>
        </ul>
    )
}

export default MenubarComponent;