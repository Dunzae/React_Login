function HomePage() {
    return (
        <div className="h-full lg:flex lg:flex-row">
            <div className="h-[100px] fixed bg-white lg:w-[300px] lg:h-full lg:flex lg:flex-col">
                <div className="h-full border">
                    <div className="h-full flex">
                        프로필
                        {/* <Profile /> */}
                    </div>
                </div>
                <div className="w-[100px] h-full absolute border top-0 right-0 lg:w-full lg:static">
                    <div className="h-full flex">
                        카테고리
                        {/* <Category /> */}
                    </div>
                </div>
            </div>
            <div className="h-[100px] lg:w-[300px] lg:h-full flex-shrink-0" />
            <div className="flex-shrink-0">
                Body
                {/* <PostList>
                    <Post/>
                    <Post />
                    <Post />
                </PostList> */}
            </div>
        </div>
    )
}

export default HomePage;