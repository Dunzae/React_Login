import LayoutComponent from "@components/Layout";
import ProfileImage from "@assets/images/profile.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

function ChatPage() {
    return (
        <LayoutComponent>
            <div className="min-h-dvh bg-[#f2f2f2] py-2 lg:py-0">
                <div className='flex lg:h-dvh lg:overflow-hidden box-border pb-[100px] lg:pb-0 lg:min-w-[800px]'>
                    <div className="hidden lg:flex lg:flex-grow lg:flex-col lg:w-[40%] lg:basis-auto lg:h-full ">
                        <div className="lg:w-full px-4 py-4">
                            <div className="flex items-center p-3 w-[60%] rounded-xl bg-white">
                                <div className="flex-grow-0 basis-0 mr-2">
                                    <IoSearchOutline />
                                </div>
                                <input className="w-full" placeholder="Search..." />
                            </div>
                        </div>
                        <div style={{ scrollbarWidth: 'none' }} className="flex flex-col lg:overflow-y-scroll lg:h-[calc(100%-80px)]">
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mb-1">
                                <div className="w-full flex flex-grow bg-white p-4">
                                    <div className="flex-shrink-0 basis-0 ">
                                        <div className="w-[44px] h-[44px] mr-4 rounded-[50%] overflow-hidden">
                                            <img src={ProfileImage} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow justify-center flex-shrink leading-[18px] text-[14px] break-words whitespace-pre-line">
                                        <p className="mb-1">
                                            <strong className="text-sm">장동건</strong>
                                        </p>
                                        <p className="w-full overflow-hidden text-ellipsis ">
                                            [컨트롤+마우스클릭]으로 "다시 생성 및 복사"가 가능합니다✖
                                            3
                                            던딘어 즈쳐서학겔은 시는, 알지운리기 털이옥곰 슬응매다. 놔오 올타박까에서 이화다 네잉길바가, 그골탈과 그나딘리어야 힛슨쥬랑곱랄모를, 근조다자지 걱청. 둠아밍두 씸합나라바를 란노의 횰솨리주딛을 입덩혇간재자의 우쥖는어 쟌앲구너. 놀브바힉다 입브다 간익즈렴도 횰잠대로 셰손을 리이으고 여엄 드키아겐다. 그고비홀조차 엘페은다 나깅긍근욧신이는 슥쫑 잖졸을 시니산란긴셀이 긴헨이어요, 소라까솜 븦히야 깨니한니. 븼힌이론던 챠드오호되비지, 잉뎁든 스괼삑짠은 윽강갠샶은 아뢰 김새나둔새다 덤아읩 운흔일버틍비다댜지 봉뒈오쁘어 져그보니그뎌. 증아풔가 머륬아 다자그웉슈뱒노걀의, 가압처럼 펑순앛방앱이.

                                        </p>
                                        <div className="text-[#737373]">
                                            2주
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-grow lg:w-[60%] flex flex-col h-full lg:basis-auto lg:h-full">
                        <div className="hidden lg:flex lg:w-full lg:h-[80px] lg:p-2">
                            <div className="bg-white flex lg:w-full lg:h-full lg:items-center px-4 flex-grow-0">
                                <CiUser className="mr-4" size={20} />
                                <span>
                                    장동건
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-full lg:p-2 lg:py-0 lg:flex-grow ">
                            <div className="lg:flex lg:flex-col h-full  bg-white p-2 lg:p-4 ">
                                <div className="w-full flex flex-wrap items-center lg:flex-nowrap lg:pb-2 lg:items-start">
                                    <div className="hidden w-[44px] h-[44px] mr-2 overflow-hidden rounded-[50%] flex-shrink-0 flex-grow-0 lg:flex lg:mr-0">
                                        <img src={ProfileImage} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-full flex-shrink-0 py-4 pl-2 flex flex-col gap-4 lg:py-0">
                                        <div className="flex items-end gap-2">
                                            <p className="p-4 w-fit bg-slate-100 rounded-xl shadow-md ">안녕</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <p className="p-4 w-fit bg-slate-100 rounded-xl shadow-md ">반가워, 나는 장동건이야</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <p className="p-4 w-fit bg-slate-100 rounded-xl shadow-md ">새학기에 너를 만나서 기뻐</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex items-end gap-2">
                                            <p className="p-4 w-fit bg-slate-100 rounded-xl shadow-md ">잘 지내보자.</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full pb-2 flex flex-wrap items-center flex-row-reverse lg:flex-nowrap lg:items-start">
                                    <div className="hidden lg:flex w-[44px] h-[44px] overflow-hidden rounded-[50%] flex-shrink-0 ">
                                        <img src={ProfileImage} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="pl-2 flex flex-col gap-4">
                                        <div className="flex justify-end items-end gap-2">
                                            <p className="p-4 w-fit bg-blue-100 rounded-xl shadow-md ">안녕</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex justify-end items-end gap-2">
                                            <p className="p-4 w-fit bg-blue-100 rounded-xl shadow-md ">반가워, 나는 장동건이야</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex justify-end items-end gap-2">
                                            <p className="p-4 w-fit bg-blue-100 rounded-xl shadow-md ">새학기에 너를 만나서 기뻐</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                        <div className="flex justify-end items-end gap-2">
                                            <p className="p-4 w-fit bg-blue-100 rounded-xl shadow-md ">잘 지내보자.</p>
                                            <span className="text-sm text-slate-400">어제</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default ChatPage;