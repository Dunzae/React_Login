import LayoutComponent from "@components/Layout";
import ProfileImage from "@assets/images/profile.jpg";
import { IoSearchOutline } from "react-icons/io5";

function ChatPage() {
    return (
        <LayoutComponent>
            <div className="min-h-dvh bg-[#f2f2f2]">
                <div className='flex lg:h-dvh lg:overflow-hidden pb-[100px] lg:pb-0 lg:min-w-[800px]'>
                    <div className="flex-grow lg:w-[40%] lg:basis-auto lg:h-full ">
                        <div className="lg:w-full px-4 py-4">
                            <div className="flex items-center p-3 w-[60%] rounded-xl bg-white">
                                <div className="flex-grow-0 basis-0 mr-2">
                                    <IoSearchOutline />
                                </div>
                                <input className="w-full" placeholder="Search..." />
                            </div>
                        </div>
                        <div style={{scrollbarWidth: 'none'}} className="flex flex-col lg:overflow-y-scroll lg:h-[calc(100%-80px)]">
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
                    <div className="flex-grow lg:w-[60%] lg:basis-auto lg:h-full hidden lg:block">
                        <div>채팅하고 있는 사람</div>
                        <div>채팅 컴포넌트</div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default ChatPage;