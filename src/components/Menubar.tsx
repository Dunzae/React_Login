import {
    IoHome, IoHomeOutline, IoBookmark, IoBookmarkOutline, IoDocumentTextOutline, IoDocumentTextSharp,
    IoPerson, IoPersonOutline
} from "react-icons/io5";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";

interface IMenubarComponent {
    currentPath: string
}

function MenubarComponent({
    currentPath
}: IMenubarComponent) {
    return (
        <ul className="flex flex-row lg:flex lg:flex-col lg:items-center lg:py-5 lg:border-r lg:border-r-[#E6E6E6]">
            <li className="p-4 flex flex-grow justify-center lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center">
                {currentPath === "/" ? <IoHome size={30} /> : <IoHomeOutline size={30} />}
            </li>
            <li className="p-4 flex flex-grow justify-center lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center">
                {currentPath === "/notification" ? <IoMdNotifications size={30} /> : <IoMdNotificationsOutline size={30} />}
            </li>
            <li className="p-4 flex flex-grow justify-center lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center">
                {currentPath === "/bookmark" ? <IoBookmark size={30} /> : <IoBookmarkOutline size={30} />}
            </li>
            <li className="p-4 flex flex-grow justify-center lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center">
                {currentPath === "/posts" ? <IoDocumentTextSharp size={30} /> : <IoDocumentTextOutline size={30} />}
            </li>
            <li className="p-4 flex flex-grow justify-center lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center">
                {currentPath === "/profile" ? <IoPerson size={30} /> : <IoPersonOutline size={30} />}
            </li>
        </ul>
    )
}

export default MenubarComponent;