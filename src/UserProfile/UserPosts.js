import UserPostConstruction from "./UserPostConstruction";


function UserPosts(posts) {
    console.log("posts", posts.posts)
     return (
        <>
            {
                 posts.posts[0].map(post => <UserPostConstruction content={post.content} />)
            }
        </>
    )
}

export default UserPosts