import LayoutComponent from "@components/Layout";

function ChatPage() {
    return (
        <LayoutComponent>
            <div className="min-h-dvh bg-[#f2f2f2]">
                <div className='flex h-dvh overflow-hidden lg:min-w-[800px]'>
                    <div className="flex-grow lg:w-[40%] lg:basis-auto lg:h-full border border-black">
                        <div>검색바</div>
                        <div>채팅한 사람들 목록</div>
                    </div>
                    <div className="flex-grow w-0 lg:w-[60%] lg:basis-auto lg:h-full border border-black">
                        <div>채팅하고 있는 사람</div>
                        <div>채팅 컴포넌트</div>
                    </div>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default ChatPage;