import { StyledPosts } from "./style";
import PostCard from "./postCard";

const PostsList = () =>{
    return( 
        <>
            <StyledPosts>
                <h3>Minhas Postagens</h3> 
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
            </StyledPosts>
        </>
    )
}

export default PostsList