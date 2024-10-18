import PostPreviewComponent from "@components/PostPreview";
import LayoutComponent from "@components/Layout";

function PostPage() {
    return (
        <LayoutComponent>
            <div className="px-[10px] py-[10px] min-h-dvh bg-[#f2f2f2] lg:px-[40px] lg:py-[40px]">
                {/* 최신 순, 추천 순 */}
                <div className="mb-[5px] top-[100px] fixed bg-white lg:flex lg:top-0 lg:static lg:mb-[20px]">
                    <div className="w-full border-b-2 border-gray flex justify-center lg:block">
                        <span className="p-4 inline-block">Following</span>
                        <span className="p-4 inline-block box-border text-gray opacity-40">Recommended</span>
                    </div>
                </div>
                <div className="w-full h-[58px] lg:hidden" />
                <div >
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                    <PostPreviewComponent />
                </div>
            </div>
        </LayoutComponent>
    )
}

export default PostPage;